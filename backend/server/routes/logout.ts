// Tähän tulee POST -logiikka logout:lle
import path from "path";
import { Router } from "express";
import isAuth from "../middleware/isAuth";
import postLogout from "../service/logout";
const router = Router();

router.post("/logout", isAuth, postLogout);

export default router;
