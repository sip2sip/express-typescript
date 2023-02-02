const postLogin = (req: { body: { email: any; password: any } }, res: any) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email:${email}, password:${password}`);
  // Tähän keycloak loggiikka
};
export default postLogin;
