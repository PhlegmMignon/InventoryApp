const Bedsheet = require("../models/bedsheet");
const asyncHandler = require("express-async-handler");

//Displays list of all bedsheets
exports.bedsheet_list = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: bedsheet list");
});

//Display detail page for specific bedsheet
exports.bedsheet_detail = asyncHandler(async (req, res, next) => {
  res.send(`WIP bedsheet detail ${req.params.id}`);
});

//Displays bedsheet create form on GET
exports.bedsheet_create_get = asyncHandler(async (req, res, next) => {
  res.send("WIP bedsheet create GET");
});

//Displays bedsheet create on POST
exports.bedsheet_create_post = asyncHandler(async (req, res, next) => {
  res.send("WIP bedsheet create POST");
});

//Display bedsheet delete form on GET
exports.bedsheet_delete_get = asyncHandler(async (req, res, next) => {
  res.send("WIP bedsheet delete GET");
});

//Handles bedsheet delete on POST
exports.bedsheet_delete_post = asyncHandler(async (req, res, next) => {
  res.send("WIP bedsheet delete POST");
});

exports.bedsheet_update_get = asyncHandler(async (req, res, next) => {
  res.send("WIP bedsheet update GET");
});

exports.bedsheet_update_post = asyncHandler(async (req, res, next) => {
  res.send("WIP bedsheet update POST");
});
