const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

const port = process.env.PORT || 5000;
const mentors = require("./routes/mentorRoute");

app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log("Cannot connect to DB right now");
  });

app.use("/api/mentors", mentors);

app.listen(port, function() {
  console.log(`Server is hosted and running on port ${port}`);
});
