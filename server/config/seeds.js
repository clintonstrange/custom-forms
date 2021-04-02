const db = require("./connection");
const { User, Screenings, Control } = require("../models");
db.once("open", async () => {
  await Control.deleteMany();

  await Control.create({
    documentor: "Perry Cox",
    screenNum: [],
    credentials: "MD",
  });

  await Control.create({
    documentor: "Carla Turk",
    screenNum: [],
    credentials: "RN",
  });

  await Control.create({
    documentor: "John Dorian",
    screenNum: [],
    credentials: "Paramedic",
  });

  await Control.create({
    documentor: "Chris Turk",
    screenNum: [],
    credentials: "EMT",
  });

  await Control.create({
    documentor: "Glen Matthews",
    screenNum: [],
    credentials: "Civilian",
  });

  console.log(" ========= CONTROL SEEDED ========= ");
  await Screenings.deleteMany();

  // await Screenings.deleteMany();

  // await Screenings.create({
  //   control: "6063bf26595bdfd2515b8c72",
  //   symptoms: "noSymptom",
  //   contact: "no",
  //   positiveTest: "no",
  //   travel: "no",
  //   screenDate: "March 1, 2021",
  // });

  //   console.log(" ========= screenings seeded ========= ");
  await User.deleteMany();

  await User.create({
    email: "goat@pga.com",
    password: "password12345",
    role: "admin",
  });
  await User.create({
    email: "lefty@pga.com",
    password: "password12345",
    role: "read/write",
  });
  await User.create({
    email: "spieth@pga.com",
    password: "password12345",
    role: "read-only",
  });
  console.log(" ========= USERS SEEDED ========= ");
  process.exit();
});
