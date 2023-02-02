import express, { Express, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import login from "./routes/login";
import logout from "./routes/logout";
import newPassword from "./routes/forgotPassword";
import refresh from "./routes/refresh";
import resetPassword from "./routes/resetPassword";
import reset from "./routes/reset";
import root from "./routes/root";
// import { initKeycloak } from "./config/keycloak-config";
console.log("NODEJS: App.ts starting");
//TODO: Pitäisikö käyttää CSRF:ää?
const app = express();

// KeycloakConfig
//TODO: miten TS:llä? Näinkö?
// const keycloak = require("./config/keycloak-config.js").initKeycloak();
// const k = initKeycloak();

const port = 3000;

app.listen(port, () => {
  console.log(`Express now listening on port ${port}`);
});
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//TODO: pitääkö jotenkin virittää public toimimaan?
// app.use("/api", express.static(path.join(__dirname, "/public")));
// app.use("/", express.static(path.join(__dirname, "/views")));

// React asetukset
app.use(express.static(path.join(__dirname, "../server/views")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../server/views", "index.html"));
});

// routet

app.use("/check", root);
app.use("/login", login);
app.use("/logout", logout);
app.use("/api/newpassword", newPassword);
app.use("/api/refresh:token", refresh);
app.use("/api/resetpassword", resetPassword);
app.use("/api/reset/:token", reset);
console.log("NODEJS: App.ts started Express");
