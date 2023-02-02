"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const logout_1 = __importDefault(require("../service/logout"));
const router = (0, express_1.Router)();
router.post("/logout", isAuth_1.default, logout_1.default);
exports.default = router;
