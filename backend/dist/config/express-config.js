"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev = {
    APP_URL: "http://localhost:3000",
    API_BASE_URL: "https://tarmo-api-dev.azurewebsites.net/api",
    IDP_URL: "https://tarmo-idp-dev.azurewebsites.net/auth",
    IDP_REALM: "tarmo",
    IDP_CLIENT_ID: "tarmo-reg-app",
    IDP_CLIENT_SECRET: "12345678-0000-0000-0000-123456789000",
    STAGE: process.env.REACT_APP_STAGE || "test",
    DisableAuth: true,
};
const prod = {
    APP_URL: process.env.REACT_APP_APP_URL || "",
    API_BASE_URL: process.env.REACT_APP_API_URL || "",
    IDP_URL: process.env.REACT_APP_IDP_URL || "",
    IDP_REALM: process.env.IDP_REALM || "",
    IDP_CLIENT_ID: process.env.IDP_CLIENT_ID || "",
    IDP_CLIENT_SECRET: process.env.IDP_CLIENT_SECRET || "",
    STAGE: process.env.REACT_APP_STAGE || "production",
    DisableAuth: true,
};
const common = {
    NODE_ENV: process.env.NODE_ENV || "",
    MaxAttachmentSize: 10000000,
    PERSON_GUID_HEADER: "X-PERSON-TOKEN",
    ACTION_TOKEN_HEADER: "X-Action-Token",
};
const envConfig = process.env.NODE_ENV === "development" ? dev : prod;
const expressConfig = Object.assign(Object.assign({}, common), envConfig);
exports.default = expressConfig;
