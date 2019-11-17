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
    res.json('Add pin here')
  });

  router.post("/register", (req, res) => {
    if (req.body.password !== req.body['password-confirm']) {
      // ERROR MESSAGE
    }
    // db.users.findOne({
    //   where: {
    //     email: req.body.email
    //   }
    // })
    let query = `
    SELECT *
    FROM users
    WHERE email = $1;
    `
    db.query(query, [req.body.email])
      .then((user) => {
        if (user.rows.length) {
          // ERROR: USER ALREADY EXISTS
        } else {
          // let hashedPassword;
          // bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
          //   hashedPassword = hash;
          // })
          let query = `
          INSERT INTO users (name, email, password)
          VALUES ($1, $2, $3);
          `
          db.query(query, [req.body.name, req.body.email, req.body.password])
            .then(() => {
              console.log("USER ADDED TO DATABASE");
              res.redirect("/");
            })
        }
      })
  });

  router.post("/login", (req, res) => {
    let query = `
    SELECT *
    FROM users
    WHERE email = $1 AND password = $2;
    `
    // Figure out how to do this with bcrypt.compare
    db.query(query, [req.body.email, req.body.password])
      .then(() => {
        if (users.rows.length) {
          // Set a cookie
          res.redirect("/");
        } else {
          // ERROR: Invalid username/password
        }
      })
  });

  // router.post("/pin/new", (req, res) => {
  //   let query = `
  //   INSERT INTO pins
  //   (owner_id,image,title,description,url)
  //   VALUES ()
  //   `
  // })

  return router;
};
