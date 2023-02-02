"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const resetPassword_1 = require("../service/resetPassword");
const router = (0, express_1.Router)();
// /login
router.post("/login", isAuth_1.default, resetPassword_1.postResetPassword);
exports.default = router;
