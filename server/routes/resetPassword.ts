// Tähän tulee POST -logiikka salasanan resetointi
import path from "path";
import { Router } from "express";
import isAuth from "../middleware/isAuth";
import { postResetPassword } from "../service/resetPassword";
const router = Router();

// /login
router.post("/login", isAuth, postResetPassword);

export default router;
