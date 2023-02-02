"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postResetPassword = void 0;
const postResetPassword = (req, res) => {
    const email = req.body.email;
    //TODO: mitä tokeneita tarvitaan mukaan?
    // Tähän keycloak loggiikka
};
exports.postResetPassword = postResetPassword;
