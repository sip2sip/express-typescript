export const postRefresh = (
  req: { body: { email: any; password: any } },
  res: any
) => {
  const email = req.body.email;
  const password = req.body.password;
  // Tähän keycloak logiikka
};
export default postRefresh;
