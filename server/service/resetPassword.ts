export const postResetPassword = (req: { body: { email: any } }, res: any) => {
  const email = req.body.email;

  //TODO: mitä tokeneita tarvitaan mukaan?
  // Tähän keycloak loggiikka
};
