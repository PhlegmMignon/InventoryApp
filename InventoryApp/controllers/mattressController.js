const Mattress = require("../models/mattress");
const asyncHandler = require("express-async-handler");

//Displays list of all mattresss
exports.mattress_list = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: mattress list");
});

//Display detail page for specific mattress
exports.mattress_detail = asyncHandler(async (req, res, next) => {
  res.send(`WIP mattress detail ${req.params.id}`);
});

//Displays mattress create form on GET
exports.mattress_create_get = asyncHandler(async (req, res, next) => {
  res.send("WIP mattress create GET");
});

//Displays mattress create on POST
exports.mattress_create_post = asyncHandler(async (req, res, next) => {
  res.send("WIP mattress create POST");
});

//Display mattress delete form on GET
exports.mattress_delete_get = asyncHandler(async (req, res, next) => {
  res.send("WIP mattress delete GET");
});

//Handles mattress delete on POST
exports.mattress_delete_post = asyncHandler(async (req, res, next) => {
  res.send("WIP mattress delete POST");
});

exports.mattress_update_get = asyncHandler(async (req, res, next) => {
  res.send("WIP mattress update GET");
});

exports.mattress_update_post = asyncHandler(async (req, res, next) => {
  res.send("WIP mattress update POST");
});
