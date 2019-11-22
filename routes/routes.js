/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express       = require('express');
const router        = express.Router();
const path          = require('path');
const cookieSession = require('cookie-session');
const bcrypt        = require('bcrypt');
const SALT_ROUNDS   = 12;

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

  router.get("/user", (req, res) => {
    res.sendFile("userProfile.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/user/pins", (req, res) => {
    res.sendFile("userPins.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/user/settings", (req, res) => {
    if (!req.session.user_id) {
      res.redirect("/login")
    }
    res.sendFile("userSettings.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/pins/new", (req, res) => {
    res.sendFile("newPin.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/pins/:id", (req, res) => {
    res.sendFile("viewPin.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/boards/new", (req, res) => {
    res.sendFile("newBoard.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/boards/:id", (req, res) => {
    res.sendFile("viewBoard.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/search", (req, res) => {
    res.sendFile("search.html", {
      root: path.join(__dirname, "../public")
    });
  });

  return router;
};
