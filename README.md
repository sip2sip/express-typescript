# Project: React app at Express Node.js
Backend Node.js Express palvelin sijaitsee /backend kansion alla ja siellä on myös oma package.json tiedosto express projektille. Olen nyt säätänyt siten, että Express palvelin palvelee myös React-appia. Projektin juuressa oleva package.json on pelkästään react:ia varten ja sieltä on poistettu kaikki muut käynnistykseen tai kääntämisen liittyvät skriptit kuin `npm run build-react`.


## Available Scripts

Seuraavilla skripteillä voidaan projektia ajaa

### `npm build`
Kääntää backend palvelimesta buildin /backend/dist kansioon ja react-appista /backend/server/views/ kansioon.
Runs the app in the development mode.\


### `npm start`
Käynnistää Node.js Express palvelimen porttiin 3000 [http://localhost:3000](http://localhost:3000) ja tarjoaa /login API:n backendistä [http://localhost:3000/login] ja hyväksyy bodyssä.
````
{    "email": "joku.henkilo@gmail.com",
    "password": "salasama"
}
````
Juuresta aukeaa React appi


# NodeJs Express for React app

```
npx create-react-app express-react --template typescript
```


### Create empty Nodejs express project

````
mkdir express-typescript
cd express-typescript
mkdir server
npm init --yes
npm install express morgan cookie-parser  body-parser
npm i -D typescript @types/express @types/node @types/morgan @types/cookie-parser @types/body-parser concurrently nodemon
npx tsc --init
````

Add 
 "outDir": "./../dist",   

Move package.json files to server folder

Remember to run npm installs etc. in ./server/ folder


Modify package.json
````
{
  "scripts": {
    "build": "npx tsc",
    "start": "node ./../dist/app.js",
    "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
  }
}
````



#### Delete directory

Remove-Item -LiteralPath express-typescript -Force -Recurse


https://expressjs.com/en/guide/using-middleware.html
https://stackoverflow.com/questions/50471757/one-project-with-multiple-package-json-files
https://blog.logrocket.com/how-to-set-up-node-typescript-express/
https://create-react-app.dev/docs/deployment
https://stackoverflow.com/questions/37579969/how-to-use-multiple-tsconfig-files-in-vs-code
https://www.bezkoder.com/integrate-react-express-same-server-port/
https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/
