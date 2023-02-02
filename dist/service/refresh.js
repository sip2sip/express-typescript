"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRefresh = void 0;
const postRefresh = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Tähän keycloak logiikka
};
exports.postRefresh = postRefresh;
exports.default = exports.postRefresh;
