const db = require("./connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany();

  await User.create({
    username: "tigerwoods",
    email: "goat@pga.com",
    password: "password12345",
    role: "admin",
  });

  await User.create({
    username: "phil",
    email: "lefty@pga.com",
    password: "password12345",
    role: "read/write",
  });

  await User.create({
    username: "jordan",
    email: "spieth@pga.com",
    password: "password12345",
    role: "read-only",
  });

  console.log("users seeded");

  process.exit();
});
