const db = require("./connection");
const { User, Screenings, Control } = require("../models");

db.once("open", async () => {
  await Control.deleteMany();

  await Control.create({
    documentor: "Perry Cox",
    screenNum: [],
    credentials: "MD",
    dateTime: "December 25, 2020",
  });

  await Control.create({
    documentor: "Carla Turk",
    screenNum: [],
    credentials: "RN",
    dateTime: "December 24, 2020",
  });

  await Control.create({
    documentor: "John Dorian",
    screenNum: [],
    credentials: "Paramedic",
    dateTime: "December 23, 2020",
  });

  await Control.create({
    documentor: "Chris Turk",
    screenNum: [],
    credentials: "EMT",
    dateTime: "December 22, 2020",
  });

  await Control.create({
    documentor: "Glen Matthews",
    screenNum: [],
    credentials: "Civilian",
    dateTime: "December 21, 2020",
  });

  console.log(" ========= CONTROL SEEDED ========= ");

  // await Screenings.deleteMany();

  //   await Screenings.create({
  //     control: 1234567890,
  //     symptoms: "noSymptom",
  //     contact: "no",
  //     positiveTest: "no",
  //     travel: "no",
  //   });
  //   await Screenings.create({
  //     control: 1234567890,
  //     symptoms: "breath",
  //     contact: "no",
  //     positiveTest: "yes",
  //     travel: "no",
  //   });
  //   await Screenings.create({
  //     control: 1234567890,
  //     symptoms: "noSymptom",
  //     contact: "yes",
  //     positiveTest: "yes",
  //     travel: "yes",
  //   });
  //   await Screenings.create({
  //     control: 1212121212,
  //     symptoms: "cough",
  //     contact: "no",
  //     positiveTest: "unsure",
  //     travel: "no",
  //   });
  //   await Screenings.create({
  //     control: 1212121212,
  //     symptoms: "fever",
  //     contact: "no",
  //     positiveTest: "unsure",
  //     travel: "no",
  //   });
  //   await Screenings.create({
  //     control: 1212121212,
  //     symptoms: "noSymptom",
  //     contact: "no",
  //     positiveTest: "no",
  //     travel: "yes",
  //   });
  //   await Screenings.create({
  //     control: 1212121212,
  //     symptoms: "noSymptom",
  //     contact: "yes",
  //     positiveTest: "no",
  //     travel: "no",
  //   });

  //   console.log(" ========= screenings seeded ========= ");

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

  console.log(" ========= USERS SEEDED ========= ");

  process.exit();
});
