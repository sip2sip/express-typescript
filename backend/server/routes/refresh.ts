// Tähän tulee GET -logiikka refresh Tokenille
import path from "path";
import { Router } from "express";
import isAuth from "../middleware/isAuth";
import postRefresh from "../service/refresh";

const router = Router();

router.post("/newpassword", isAuth, postRefresh);

export default router;
