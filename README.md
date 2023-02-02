# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


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
