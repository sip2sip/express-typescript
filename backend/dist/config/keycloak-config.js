"use strict";
// import session from "express-session";
// import Keycloak from "keycloak-connect";
// let _keycloak: any;
// const keycloakConfig = {
//   clientId: "nodejs-microservice",
//   bearerOnly: true,
//   serverUrl: "http://localhost:8080/auth",
//   realm: "Demo-Realm",
//   credentials: {
//     secret: "62c99f7c-da55-48fb-ae4e-a27f132546b7",
//   },
// };
// export const initKeycloak = () => {
//   if (_keycloak) {
//     console.warn("Trying to init Keycloak again!");
//     return _keycloak;
//   } else {
//     console.log("Initializing Keycloak...");
//     const memoryStore = new session.MemoryStore();
//     _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
//     return _keycloak;
//   }
// };
// export const getKeycloak = () => {
//   if (!_keycloak) {
//     console.error(
//       "Keycloak has not been initialized. Please called init first."
//     );
//   }
//   return _keycloak;
// };
// module.exports = {
//   initKeycloak,
//   getKeycloak,
// };
