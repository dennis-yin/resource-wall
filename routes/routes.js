/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express     = require('express');
const router      = express.Router();
const path        = require('path');
const bcrypt      = require('bcrypt');
const SALT_ROUNDS = 12;

module.exports = (db) => {
  router.get("/register", (req, res) => {
    res.sendFile("register.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/login", (req, res) => {
    res.sendFile("login.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/users/:id", (req, res) => {
    res.sendFile("userProfile.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/pins/new", (req, res) => {
    res.sendFile("newPin.html", {
      root: path.join(__dirname, "../public")
    });
  });

  return router;
};
