import express, { Express, Request, Response } from "express"
const app: Express = express();
import { PORT } from "./secrets"

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
