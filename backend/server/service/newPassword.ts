export const postNewPassword = (
  req: { body: { email: any; password: any } },
  res: any
) => {
  const email = req.body.email;
  const password = req.body.password;
  //TODO: mitä tokeneita tarvitaan mukaan?
  // Tähän keycloak loggiikka
};
