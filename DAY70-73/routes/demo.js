const express = require("express");

const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("welcome");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.post("/signup", async function (req, res) {
  const userData = req.body;
  const userEmail = userData.email; // userData['email'];  is also an alternative
  const userConfirmedEmail = userData["confirm-email"];
  const userPassword = userData.password;

  if (
    !userEmail ||
    !userConfirmedEmail ||
    !userPassword ||
    userPassword.trim().length < 6 ||
    userEmail !== userConfirmedEmail ||
    !userEmail.includes('@')
  ) {
    console.log('Incorrect data');
    return res.redirect('/signup');
  }

  const existingUser = await db
    .getDb()
    .collection('users')
    .findOne({ email: userEmail });

  if (existingUser) {
    console.log('User exists already');
    return res.redirect('/signup');
  }

  const hashedPassword = await bcrypt.hash(userPassword, 10);

  const user = {
    // Creating a doc named user
    email: userEmail,
    password: hashedPassword,
  };

  // console.log(hashedPassword);
  await db.getDb().collection("users").insertOne(user);

  res.redirect("/login");
});

router.post("/login", async function (req, res) {
  const userData = req.body;
  const userEmail = userData.email;
  const userPassword = userData.password;
  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: userEmail });

  if (!existingUser) {
    console.log("UserEmail Not Found");
    return res.redirect("/login");
  }

  const passmatch = await bcrypt.compare(userPassword, existingUser.password);
  // console.log(passmatch);

  if (!passmatch) {
    console.log("Wrong User Credentials -> Wrong password");
    return res.redirect("/login");
  }

  console.log("Credentials Matched");
  res.redirect("/admin");
});

router.get("/admin", function (req, res) {
  res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;