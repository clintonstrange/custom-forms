const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    username: "tigerwoods",
    email: "goat@pga.com",
    password: "password12345",
    role: "director",
  });

  await User.create({
    username: "phil",
    email: "lefty@pga.com",
    password: "password12345",
    role: "manager",
  });

  await User.create({
    username: "jordan",
    email: "spieth@pga.com",
    password: "password12345",
    role: "admin",
  });

  console.log("users seeded");

  process.exit();
});
