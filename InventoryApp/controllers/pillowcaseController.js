const Pillowcase = require("../models/pillowcase");
const asyncHandler = require("express-async-handler");

//Displays list of all pillowcases
exports.pillowcase_list = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: pillowcase list");
});

//Display detail page for specific pillowcase
exports.pillowcase_detail = asyncHandler(async (req, res, next) => {
  res.send(`WIP pillowcase detail ${req.params.id}`);
});

//Displays pillowcase create form on GET
exports.pillowcase_create_get = asyncHandler(async (req, res, next) => {
  res.send("WIP pillowcase create GET");
});

//Displays pillowcase create on POST
exports.pillowcase_create_post = asyncHandler(async (req, res, next) => {
  res.send("WIP pillowcase create POST");
});

//Display pillowcase delete form on GET
exports.pillowcase_delete_get = asyncHandler(async (req, res, next) => {
  res.send("WIP pillowcase delete GET");
});

//Handles pillowcase delete on POST
exports.pillowcase_delete_post = asyncHandler(async (req, res, next) => {
  res.send("WIP pillowcase delete POST");
});

exports.pillowcase_update_get = asyncHandler(async (req, res, next) => {
  res.send("WIP pillowcase update GET");
});

exports.pillowcase_update_post = asyncHandler(async (req, res, next) => {
  res.send("WIP pillowcase update POST");
});
