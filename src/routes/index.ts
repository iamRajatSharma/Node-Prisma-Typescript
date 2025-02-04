import { Router } from "express";
import authRoute from "./auth";

const routeRouter: Router = Router();

routeRouter.use("/auth", authRoute);

export default routeRouter;