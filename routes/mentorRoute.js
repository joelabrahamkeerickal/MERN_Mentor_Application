const express = require("express");
const router = express.Router();
const Mentor = require("../models/mentorModel");

router.get("/", (req, res) => {
  Mentor.find()
    .sort({ name: 1 })
    .then(mentors => res.json(mentors));
});

router.get("/:id", (req, res) => {
  Mentor.findById(req.params.id)
    .then(mentor => res.json(mentor))
    .catch(err => {
      res.status(500).json({ success: false });
    });
});

router.post("/add", (req, res) => {
  let mentor = new Mentor(req.body);
  mentor
    .save()
    .then(mentor => {
      res.json(mentor);
    })
    .catch(err => {
      res.status(500).json({ success: false });
    });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  Mentor.findByIdAndDelete(id)
    .then(mentor => res.json(`Mentor ${mentor.name} is removed`))
    .catch(err => res.status(500).json({ success: false }));
});

router.post("/:id", (req, res) => {
  let id = req.params.id;
  Mentor.findByIdAndUpdate(id, { $set: req.body })
    .then(mentor => res.json(`Mentor is updated`))
    .catch(err => res.status(500).json({ success: false }));
});

module.exports = router;
