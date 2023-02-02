"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import path from "path";
// import express from "express";
// const router = express.Router();
// // logout
// router.post("/logout", isAuth, logout.postLogout);
// // reset Password (tilataan email)
// router.post("/api/resetPassword", isAuth, resetPassword.postResetPassword);
// // reset (tullaan linkillä )
// router.get("/reset", reset.getReset);
// // new password (asetetaan uusi salasana)
// router.post();
// // /admin/add-product => GET
// router.get("/add-product", isAuth, adminController.getAddProduct);
// // /admin/products => GET
// router.get("/products", isAuth, adminController.getProducts);
// // /admin/add-product => POST
// router.post("/add-product", isAuth, adminController.postAddProduct);
// router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);
// router.post("/edit-product", isAuth, adminController.postEditProduct);
// router.post("/delete-product", isAuth, adminController.postDeleteProduct);
// module.exports = router;
// import express, { Express, Request, Response } from "express";
// import path from "path";
// import morgan from "morgan";
// import cookieParser from "cookie-parser";
// const app = express();
// const port = 8000;
// app.listen(port, () => {
//   console.log(`Express now listening on port ${port}`);
// });
// app.use(morgan("combined"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use("/api", express.static(path.join(__dirname, "/public")));
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var app = express();
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// import debug from 'debug';
// import express from 'express';
// import path from 'path';
// import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import createError from 'http-errors';
// import http from 'http';
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
