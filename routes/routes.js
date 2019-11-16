/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
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

  router.get("/:id/pins", (req, res) => {
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

  return router;
};
