"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const isAuth_1 = __importDefault(require("../middleware/isAuth"));
const refresh_1 = __importDefault(require("../service/refresh"));
const router = (0, express_1.Router)();
router.post("/newpassword", isAuth_1.default, refresh_1.default);
exports.default = router;
