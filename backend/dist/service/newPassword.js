"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postNewPassword = void 0;
const postNewPassword = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    //TODO: mitä tokeneita tarvitaan mukaan?
    // Tähän keycloak loggiikka
};
exports.postNewPassword = postNewPassword;
