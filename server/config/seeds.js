const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    username: "tigerwoods",
    email: "goat@pga.com",
    password: "password12345",
    role: "Director",
  });

  await User.create({
    username: "lefty",
    email: "lefty@pga.com",
    password: "password12345",
    role: "Manager",
  });

  await User.create({
    username: "spieth",
    email: "spieth@pga.com",
    password: "password12345",
    role: "admin",
  });

  console.log("users seeded");

  process.exit();
});
