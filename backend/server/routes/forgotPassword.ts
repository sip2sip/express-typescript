// Tähän tulee POST -logiikka uuden salasanan asettamiselle
import path from "path";
import { Router } from "express";
import { isAuth } from "../middleware/isAuth";
import { postNewPassword } from "../service/newPassword";
const router = Router();

router.post("/forgotpassword", isAuth, postNewPassword);

export default router;
