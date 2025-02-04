import { Request, Response } from "express"
import { prismaClient } from "..";
import { hashSync } from "bcrypt"



export const login = (req: Request, res: Response) => {

    res.send({ message: "Login Route" });
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