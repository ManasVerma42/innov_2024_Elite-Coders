const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const User = require("./models/User");
require("dotenv").config();
const saltRounds = 10;
// app.set("view engine", "ejs");
const bodyparser = require("body-parser");

app.use(cors());
//app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   if ("OPTIONS" == req.method) {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });

const mongo_uri = process.env.MONGO_URI;
mongoose
  .connect(
    mongo_uri,
    { useNewUrlParser: true },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email)
    return res.status(400).send("One or more of the fields are missing.");
  try {
    const user = await User.findOne({
      email,
    });
    if (user) return res.status(400).send("User already exists.");
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      email,
      password: hashedPassword,
      todos: [],
    });
    await newUser.save();
    res.status(201).send("User created successfully.");
  } catch (err) {
    //return the error message
    res.status(500).send(err.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  if (!password || !email)
    return res.status(400).send("One or more of the fields are missing.");
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) return res.status(400).send("User does not exist.");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials.");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/update-todo", async (req, res) => {
  const { email, todos } = req.body;
  if (!email)
    return res.status(400).send("One or more of the fields are missing.");
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) return res.status(400).send("User does not exist.");
    user.todos = todos;
    await user.save();
    res.status(200).send("Todos updated successfully.");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/", async (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).send("Email is missing.");
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) return res.status(400).send("User does not exist.");
    res.status(200).send(user.todos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const port = 8000;
app.listen(port, () => {
  console.log("Server started at " + port);
});
