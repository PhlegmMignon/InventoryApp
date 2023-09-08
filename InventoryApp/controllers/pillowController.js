const Pillow = require("../models/pillow");
const asyncHandler = require("express-async-handler");

//Displays list of all pillows
exports.pillow_list = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: pillow list");
});

//Display detail page for specific pillow
exports.pillow_detail = asyncHandler(async (req, res, next) => {
  res.send(`WIP pillow detail ${req.params.id}`);
});

//Displays pillow create form on GET
exports.pillow_create_get = asyncHandler(async (req, res, next) => {
  res.send("WIP pillow create GET");
});

//Displays pillow create on POST
exports.pillow_create_post = asyncHandler(async (req, res, next) => {
  res.send("WIP pillow create POST");
});

//Display pillow delete form on GET
exports.pillow_delete_get = asyncHandler(async (req, res, next) => {
  res.send("WIP pillow delete GET");
});

//Handles pillow delete on POST
exports.pillow_delete_post = asyncHandler(async (req, res, next) => {
  res.send("WIP pillow delete POST");
});

exports.pillow_update_get = asyncHandler(async (req, res, next) => {
  res.send("WIP pillow update GET");
});

exports.pillow_update_post = asyncHandler(async (req, res, next) => {
  res.send("WIP pillow update POST");
});
