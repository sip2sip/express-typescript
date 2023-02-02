"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`email:${email}, password:${password}`);
    // Tähän keycloak loggiikka
};
exports.default = postLogin;
