import path from "path";
import { Router } from "express";
import isAuth from "../middleware/isAuth";
import postLogin from "../service/postLogin";
const root = Router();

root.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  console.log("???");
  res.send("Express + TypeScript Server");
});

export default root;
