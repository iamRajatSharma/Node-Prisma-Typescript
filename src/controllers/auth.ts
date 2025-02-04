import { Request, Response } from "express"
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_SECRET_KEY } from "../secrets";


export const logIn = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    let user = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    });

    if (!user) {
        throw new Error("User Not exists");
    }

    if (!compareSync(password, user.password)) {
        throw new Error("Invalid Credentials");
    }

    let token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY)

    res.json({ user, token: token })
}


export const signUp = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    let user = await prismaClient.user.findFirst({
        where: {
            email: email
        }
    });

    if (user) {
        throw new Error("User already exists");
    }

    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    });

    res.json(user);

}