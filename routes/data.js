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
  router.get("/pins", (req, res) => {
    let query = `
    SELECT *
    FROM pins;
    `
    db.query(query)
      .then(data => {
        let pins = data.rows
        let obj = {}
        for(let pin of pins){
          obj[pin.id] = pin
        }
        res.json(obj);
      });
  });

  router.get("/users/:id", (req, res) => {
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
      for(let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  });

  router.get("/users/boards/:user_id", (req, res) => {
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
      for(let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
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
      for(let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  })

  router.get("/pins/:pin_id", (req, res) => {
    let query = `
    SELECT * FROM pins WHERE id = $1;
    `
    const arg = [req.params.pin_id]
    db.query(query, arg)
    .then(data => {
      let pins = data.rows
      let obj = {}
      for(let pin of pins){
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
      for(let pin of pins){
        obj[pin.id] = pin
      }
      res.json(obj);
    });
  })

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
          console.log('User already exists')
        } else {
          bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
            let query = `
            INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3);
            `
            db.query(query, [req.body.name, req.body.email, hash])
              .then(() => {
                console.log("USER ADDED TO DATABASE");
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
        console.log(user.rows[0].password)
        if (user.rows.length) {
          bcrypt.compare(req.body.password, user.rows[0].password, (err, success) => {
            if (success) {
              // Set a cookie
              res.redirect("/");
            }
          });
        } else {
          // ERROR: Invalid username/password
        }
      })
  });

  router.post("/pins/new", (req, res) => {
    let query;
    let data = [];
    if(req.body.image){ //grab id from cookie for now default to owner_id 1
      query = `
      INSERT INTO pins
      (owner_id,image,title,description,url)
      VALUES (1,$1,$2,$3,$4)
      `
      data.push(req.body.image,req.body.title,req.body.description,req.body.url)
    }else{  //grab id from cookie for now default to owner_id 1
      query = `
      INSERT INTO pins
      (owner_id,title,description,url)
      VALUES (1,$1,$2,$3)
      `
      data.push(req.body.title,req.body.description,req.body.url)
    }
    console.log(query,data)
    db.query(query, data)
      .then(() => {
        res.redirect("/users/1") //grab id from cookie for now default to owner_id 1
      });
  })

  router.post("/boards/new", (req, res) => {
    let query;
    let data = [];
    if(req.body.image){ //grab id from cookie for now default to owner_id 1
      query = `
      INSERT INTO boards
      (owner_id,image,title,description)
      VALUES (1,$1,$2,$3)
      `
      data.push(req.body.image,req.body.title,req.body.description)
    }else{  //grab id from cookie for now default to owner_id 1
      query = `
      INSERT INTO boards
      (owner_id,title,description)
      VALUES (1,$1,$2)
      `
      data.push(req.body.title,req.body.description)
    }
    console.log(query,data)
    db.query(query, data)
      .then(() => {
        res.redirect("/users/1") //grab id from cookie for now default to owner_id 1
      });
  })

  return router;
};
