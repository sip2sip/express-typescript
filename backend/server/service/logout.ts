export const postLogout = (
  req: { body: { client_id: any; client_secret: any; refresh_token: any } },
  res: any
) => {
  const clientId = req.body.client_id;
  const clientSecret = req.body.client_secret;
  const refreshToken = req.body.refresh_token;
  // Tähän keycloak loggiikka
};

export default postLogout;
