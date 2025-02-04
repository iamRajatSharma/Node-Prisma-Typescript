import express, { Express, Request, Response } from "express"
const app: Express = express();
import { PORT } from "./secrets"
import routeRouter from "./routes";
import { PrismaClient } from "@prisma/client";

app.use(express.json())
export const prismaClient = new PrismaClient({
    log: ['query']
})
// auth routes
app.use("/api", routeRouter);

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
