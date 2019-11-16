/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("", (req, res) => {
    let query = `
    SELECT * FROM pins;
    `
    db.query(query)
      .then(data => {
        res.json(data.rows);
      });
  });

  router.get("/users/:id", (req, res) => {
    let query = `
    SELECT u.name, u.profile_picture, b.*
    FROM users u
    JOIN boards b on b.owner_id = u.id
    WHERE u.id = $1;
    `
    db.query(query, [req.params.id])
      .then(data => {
        res.json(data.rows);
      });
  });

  router.get("/users/:id/pins", (req, res) => {
    let query = `
    SELECT u.name, u.profile_picture, p.*
    FROM users u
    JOIN pins p ON u.id = p.owner_id
    WHERE u.id = $1;
    `
    db.query(query, [req.params.id])
      .then(data => {
        res.json(data.rows);
      })
  })

  router.get("/pins/new", (req, res) => {
    res.json('Add pin here')
  })

  router.get("/pins/:pin_id", (req, res) => {
    let query = `
    SELECT * FROM pins WHERE id = $1;
    `
    db.query(query, [req.params.pin_id])
      .then(data => {
        res.json(data.rows);
      })
  })

  router.get("/boards/:board_id", (req, res) => {
    let query = `
    SELECT * FROM boards
    JOIN boards_pins ON board_id = boards.id
    JOIN pins ON pin_id = pins.id
    WHERE boards.id = $1;
    `
    db.query(query, [req.params.board_id])
      .then(data => {
        res.json(data.rows);
      })
  })



  // router.post("/pin/new", (req, res) => {
  //   let query = `
  //   INSERT INTO pins
  //   (owner_id,image,title,description,url)
  //   VALUES ()
  //   `
  // })


  return router;
};
