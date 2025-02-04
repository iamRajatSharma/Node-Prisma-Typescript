import { Router } from "express";
import { login, signUp } from "../controllers/auth";

const authRoute: Router = Router();

authRoute.post("/signUp", signUp);

export default authRoute;