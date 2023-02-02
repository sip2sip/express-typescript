"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogout = void 0;
const postLogout = (req, res) => {
    const clientId = req.body.client_id;
    const clientSecret = req.body.client_secret;
    const refreshToken = req.body.refresh_token;
    // Tähän keycloak loggiikka
};
exports.postLogout = postLogout;
exports.default = exports.postLogout;
