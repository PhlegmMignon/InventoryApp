#! /usr/bin/env node

console.log(
  'This script populates pillows, pillowcases, mattresses, and bedsheets to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Pillow = require("./models/pillow");
const Pillowcase = require("./models/pillowcase");
const Bedsheet = require("./models/bedsheet");
const Mattress = require("./models/mattress");

const pillows = [];
const pillowcases = [];
const bedsheets = [];
const mattresses = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createPillows();
  await createPillowcases();
  await createMattresses();
  await createBedsheets();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// genre[0] will always be the Fantasy genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function pillowCreate(index, name, stock, description, price) {
  const pillow = new Pillow({
    name: name,
    stock: stock,
    description: description,
    price: price,
  });
  await pillow.save();
  pillows[index] = pillow;
  console.log(`Added pillow: ${name}`);
}

async function pillowcaseCreate(index, name, stock, description, price) {
  const pillowcase = new Pillowcase({
    name: name,
    stock: stock,
    description: description,
    price: price,
  });

  await pillowcase.save();
  pillowcases[index] = pillowcase;
  console.log(`Added pillowcase: ${name}`);
}

async function mattressCreate(index, name, stock, description, price, size) {
  const mattress = new Mattress({
    name: name,
    stock: stock,
    description: description,
    price: price,
    size: size,
  });
  await mattress.save();
  mattresses[index] = mattress;
  console.log(`Added mattress: ${name}`);
}

async function bedsheetCreate(index, name, stock, description, price, size) {
  const bedsheet = new Bedsheet({
    name: name,
    stock: stock,
    description: description,
    price: price,
    size: size,
  });
  await bedsheet.save();
  bedsheet[index] = bedsheet;
  console.log(`Added bedsheet: ${name}`);
}

async function createPillows() {
  console.log("Adding pillows");
  await Promise.all([
    pillowCreate(0, "Drowsy goose down pillow", 20, "Description", 35),
    pillowCreate(1, "Drowsy silk pillow", 20, "Description", 110),
    pillowCreate(2, "Drowsy wool pillow", 20, "Description", 20),
  ]);
}

async function createPillowcases() {
  console.log("Adding pillowcase");
  await Promise.all([
    pillowcaseCreate(
      0,
      "Silk pillowcase",
      20,
      "Satin weave silk pillowcase hypoallergenic",
      40
    ),
    pillowcaseCreate(
      1,
      "Cotton pillowcase",
      20,
      "Percale weave well suited for winters",
      15
    ),
    pillowcaseCreate(
      2,
      "Linen pillowcase",
      20,
      "Durable pillowcase that softens with time",
      25
    ),
  ]);
}

async function createMattresses() {
  console.log("Adding mattresses");
  await Promise.all([
    mattressCreate(
      0,
      "Spring mattress",
      20,
      "Comfortable spring mattress with long lifespan",
      300,
      "Twin"
    ),
    mattressCreate(
      1,
      "Memory foam mattress",
      20,

      "Even pressure along spine for comfortable sleep. Great for side sleepers",
      600,
      "King"
    ),
    mattressCreate(
      2,
      "Hybrid mattress",
      20,
      "Spring base with memory foam top",
      450,
      "Queen"
    ),
  ]);
}

async function createBedsheets() {
  console.log("Adding bedsheets");
  await Promise.all([
    bedsheetCreate(
      0,
      "Cotton bedsheets",
      20,
      "100% cotton with a satin weave",
      60,
      "Twin"
    ),
    bedsheetCreate(
      1,
      "Linen bedsheets",
      20,
      "Percale weave linen. 500 thread count",
      150,
      "Queen"
    ),
    bedsheetCreate(
      2,
      "Silk bedsheets",
      20,
      "Comfortable sheets great for those with allergies",
      300,
      "King"
    ),
  ]);
}
