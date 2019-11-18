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
  router.get("/pins", (req, res) => {
    let query = `
    SELECT *
    FROM pins;
    `
    db.query(query)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for (let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  });

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

  router.get("/data/users/:id", (req, res) => {
    let query = `
    SELECT u.id,u.name,u.name,u.profile_picture
    FROM users u
    WHERE u.id = $1;
    `
    const arg = [req.params.id]
    db.query(query, arg)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for (let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  });

  router.get("/data/users/boards/:user_id", (req, res) => {
    let query = `
    SELECT b.*
    FROM users u
    JOIN boards b ON b.owner_id = u.id
    WHERE u.id = $1;
    `
    const arg = [req.params.user_id]
    db.query(query, arg)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for (let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  });

  router.get("/users/:id", (req, res) => {
    res.sendFile("userProfile.html", {
      root: path.join(__dirname, "../public")
    });
  });

  router.get("/users/:id/pins", (req, res) => {
    let query = `
    SELECT u.name, u.profile_picture, p.*
    FROM users u
    JOIN pins p ON u.id = p.owner_id
    WHERE u.id = $1;
    `
    const arg = [req.params.id]
    db.query(query, arg)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for (let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  })

  router.get("/pins/new", (req, res) => {
    res.json('Add pin here')
  });

  router.get("/pins/:pin_id", (req, res) => {
    let query = `
    SELECT * FROM pins WHERE id = $1;
    `
    const arg = [req.params.pin_id]
    db.query(query, arg)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for (let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  })

  router.get("/boards/:board_id", (req, res) => {
    let query = `
    SELECT *
    FROM boards
    JOIN boards_pins ON board_id = boards.id
    JOIN pins ON pin_id = pins.id
    WHERE boards.id = $1;
    `
    const arg = [req.params.board_id]
    db.query(query, arg)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for (let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  })

  router.get("/search/pins/:keyword", (req, res) => {
    // Finds pins where the search term is the category or in the description
    // CASE SENSITIVE
    let query = `
    SELECT p.title, c.name
    FROM pins p
    JOIN categories_pins cp ON p.id = cp.pin_id
    JOIN categories c on c.id = cp.category_id
    WHERE c.name = $1 OR p.description LIKE '%$1%';
    `
    db.query(query, [req.params.keyword])
    .then(data => {
      console.log(data);
    });
  });

  router.post("/register", (req, res) => {
    if (req.body.password !== req.body['password-confirm']) {
      // ERROR MESSAGE
    }
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
        bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
          let query = `
          INSERT INTO users (name, email, password)
          VALUES ($1, $2, $3)
          RETURNING id;
          `
          db.query(query, [req.body.name, req.body.email, hash])
          .then((id) => {
            req.session.user_id = id;
            res.redirect("/");
          })
        });
      }
    })
  });

  router.post("/login", (req, res) => {
    let query = `
    SELECT *
    FROM users
    WHERE email = $1;
    `
    db.query(query, [req.body.email])
    .then((user) => {
      const user_id = user.rows.id;
      if (user.rows.length) {
        bcrypt.compare(req.body.password, user.rows[0].password, (err, success) => {
          if (success) {
            req.session.user_id = user_id;
            res.redirect("/");
          }
        });
      } else {
        // ERROR: Invalid username/password
      }
    })
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.redirect("/login");
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
