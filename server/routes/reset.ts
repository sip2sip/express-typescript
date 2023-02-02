// Tähän tulee GET logiikka , että onko token-valid ja salasana voidaan vaihtaaa
import path from "path";
import { Router } from "express";
import { isAuth } from "../middleware/isAuth";
import { getReset } from "../service/reset";
const router = Router();

// /login
router.post("/login", isAuth, getReset);
export default router;
