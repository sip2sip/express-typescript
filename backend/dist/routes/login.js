"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login = (0, express_1.Router)();
// /login
// login.post("/login", postLogin);
login.post("", (req, res) => {
    console.log("/loginia pukkaa");
    console.log;
    const email = req.body.email;
    const password = req.body.password;
    console.log(`email:${email}, password:${password}`);
    res.sendStatus(200);
});
exports.default = login;
