// Tähän tulee POST -logiikka loginille
import path from "path";
import { Router, Request, Response } from "express";
import postLogin from "../service/postLogin";
const login = Router();

// /login
// login.post("/login", postLogin);
login.post("", (req: Request, res: Response) => {
  console.log("/loginia pukkaa");
  console.log;
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email:${email}, password:${password}`);
  res.sendStatus(200);
});

export default login;
