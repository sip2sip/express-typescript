"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const login_1 = __importDefault(require("./routes/login"));
const logout_1 = __importDefault(require("./routes/logout"));
const forgotPassword_1 = __importDefault(require("./routes/forgotPassword"));
const refresh_1 = __importDefault(require("./routes/refresh"));
const resetPassword_1 = __importDefault(require("./routes/resetPassword"));
const reset_1 = __importDefault(require("./routes/reset"));
const root_1 = __importDefault(require("./routes/root"));
// import { initKeycloak } from "./config/keycloak-config";
console.log("NODEJS: App.ts starting");
//TODO: Pitäisikö käyttää CSRF:ää?
const app = (0, express_1.default)();
// KeycloakConfig
//TODO: miten TS:llä? Näinkö?
// const keycloak = require("./config/keycloak-config.js").initKeycloak();
// const k = initKeycloak();
const port = 3000;
app.listen(port, () => {
    console.log(`Express now listening on port ${port}`);
});
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
//TODO: pitääkö jotenkin virittää public toimimaan?
// app.use("/api", express.static(path.join(__dirname, "/public")));
// app.use("/", express.static(path.join(__dirname, "/views")));
// React asetukset
app.use(express_1.default.static(path_1.default.join(__dirname, "../server/views")));
app.get("/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../server/views", "index.html"));
});
// routet
app.use("/check", root_1.default);
app.use("/login", login_1.default);
app.use("/logout", logout_1.default);
app.use("/api/newpassword", forgotPassword_1.default);
app.use("/api/refresh:token", refresh_1.default);
app.use("/api/resetpassword", resetPassword_1.default);
app.use("/api/reset/:token", reset_1.default);
console.log("NODEJS: App.ts started Express");
