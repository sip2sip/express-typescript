"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = require("../middleware/isAuth");
const newPassword_1 = require("../service/newPassword");
const router = (0, express_1.Router)();
router.post("/forgotpassword", isAuth_1.isAuth, newPassword_1.postNewPassword);
exports.default = router;
