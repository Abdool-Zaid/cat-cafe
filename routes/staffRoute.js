const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

const middleware = require("../middleware/auth");

router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM staff", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// Gets one staff
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM staff WHERE staffID = ${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
// Add new post
router.post("/", (req, res) => {
  // if (req.header.token> 4){

  // the below allows you to only need one const, but every input required is inside of the brackets
  const { staffID, name, image } = req.body;
  // OR
  // the below requires you to add everything one by one
  //   const email = req.body.email;
  try {
    con.query(
      //When using the ${}, the content of con.query MUST be in the back tick
      `INSERT INTO staff (name,image) VALUES ("${name}","${image}")`,
      (err, result) => {
        if (err) throw err;
        res.send(`cat registered ${name}`);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
  // }
  // else{
  //   res.send('not admin');
  // }
});

// update user

router.put("/:id", (req, res) => {
  if (req.body.user_type === "._.") {
    try {
      const { staffID, name, image } = req.body;

      con.query(
        `UPDATE staff set staffID="${staffID}",name="${name}",image="${image}" WHERE staffID = "${req.params.id}"`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } else {
    res.send("not ._.");
  }
});

// delete user

router.delete("/:id", middleware, (req, res) => {
  if (req.body.user_type === "._.") {
    try {
      con.query(
        `DELETE FROM staff WHERE staffID = "${req.params.id}" `,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } else {
    res.send("not ._.");
  }
});

module.exports = router;
