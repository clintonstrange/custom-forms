const db = require("./connection");
const { User, Screenings } = require("../models");

db.once("open", async () => {
  await Screenings.deleteMany();

  await Screenings.create({
    symptoms: "noSymptom",
    contact: "no",
    positiveTest: "no",
    travel: "no",
  });
  await Screenings.create({
    symptoms: "breath",
    contact: "no",
    positiveTest: "yes",
    travel: "no",
  });
  await Screenings.create({
    symptoms: "noSymptom",
    contact: "yes",
    positiveTest: "yes",
    travel: "yes",
  });
  await Screenings.create({
    symptoms: "cough",
    contact: "no",
    positiveTest: "unsure",
    travel: "no",
  });
  await Screenings.create({
    symptoms: "fever",
    contact: "no",
    positiveTest: "unsure",
    travel: "no",
  });
  await Screenings.create({
    symptoms: "noSymptom",
    contact: "no",
    positiveTest: "no",
    travel: "yes",
  });
  await Screenings.create({
    symptoms: "noSymptom",
    contact: "yes",
    positiveTest: "no",
    travel: "no",
  });

  console.log("screenings seeded");

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
