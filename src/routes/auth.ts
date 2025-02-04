import { Router } from "express";
import { logIn, signUp } from "../controllers/auth";

const authRoute: Router = Router();

authRoute.post("/signUp", signUp);
authRoute.post("/login", logIn);

export default authRoute;