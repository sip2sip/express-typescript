"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = require("../middleware/isAuth");
const reset_1 = require("../service/reset");
const router = (0, express_1.Router)();
// /login
router.post("/login", isAuth_1.isAuth, reset_1.getReset);
exports.default = router;
