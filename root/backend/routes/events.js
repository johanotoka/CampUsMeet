const express = require("express");
const User = require("../models/event.model");
const router = express.Router();
const { IDGenerator, generateAvailability } = require("./utils.js");

// show all users
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// find a user
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((doc) => res.json(doc))
    .catch((err) => res.status(400).json("Error: " + err));
});

// add a new user
router.post("/add", async (req, res) => {
  const {
    event_name,
    start_date,
    end_date,
    start_time,
    end_time,
    availability = generateAvailability(
      start_date,
      end_date,
      start_time,
      end_time
    ),
  } = req.body;

  const newUser = new User({
    event_name,
    start_date,
    end_date,
    users: [],
    start_time,
    end_time,
    availability,
  });

  newUser
    .save()
    .then(() => res.json(`${newUser.id} added!`))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update a new user
router.put(":id/updatenewuser", () => {
  const userName = req.body.user;
  const ID = IDGenerator();
  const userObject = {
    id: ID,
    name: userName,
  };
  User.updateOne(
    {
      _id: req.params.id,
    },
    {
      $push: {
        users: userObject,
      },
    },
    {
      runValidators: true,
    }
  )
    .then(() =>
      res.json({
        message: "Successfully added user",
        id: ID,
      })
    )
    .catch((err) => console.log(err));
});

// update user availability

router.put("/:id/update", () => {
  const avail = req.body.availability;
  User.updateOne(
    {
      _id: req.params.id,
    },
    {
      availability: avail,
    },
    {
      runValidators: true,
    }
  ).then(() =>
    res.json({
      message: "Successfully updated availability of user",
    })
  );
});

module.exports = router;
