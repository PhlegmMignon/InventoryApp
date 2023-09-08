const express = require("express");
const router = express.Router();

const pillow_controller = require("../controllers/pillowController");
const pillowcase_controller = require("../controllers/pillowcaseController");
const bedsheet_controller = require("../controllers/bedsheetController");
const mattress_controller = require("../controllers/mattressController");

//PILLOW ROUTES

//GET catalog home page
router.get("/", pillow_controller.index);

//GET request for creating pillow. NOTE this must come before routes that display Pillow (uses id)
router.get("/pillow/create", pillow_controller.pillow_create_get);

//POST request for creating pillow
router.post("/pillow/create", pillow_controller.pillow_create_post);

//GET request for deleting pillow
router.get("/pillow/:id/delete", pillow_controller.pillow_delete_get);

//POST request to delete pillow
router.post("/pillow/:id/delete", pillow_controller.pillow_delete_post);

//GET request to update pillow
router.get("/pillow/:id/update", pillow_controller.pillow_update_get);

//POST request to update pillow
router.get("/pillow/:id/update", pillow_controller.pillow_update_post);

//GET request for 1 pillow
router.get("/pillow/:id", pillow_controller.pillow_detail);

//GET request for list of pillows
router.get("/pillows", pillow_controller.pillow_list);

/// pillowcase ROUTES ///

// GET request for creating a pillowcase. NOTE This must come before routes that display pillowcase (uses id).
router.get("/pillowcase/create", pillowcase_controller.pillowcase_create_get);

// POST request for creating pillowcase.
router.post("/pillowcase/create", pillowcase_controller.pillowcase_create_post);

// GET request to delete pillowcase.
router.get(
  "/pillowcase/:id/delete",
  pillowcase_controller.pillowcase_delete_get
);

// POST request to delete pillowcase.
router.post(
  "/pillowcase/:id/delete",
  pillowcase_controller.pillowcase_delete_post
);

// GET request to update pillowcase.
router.get(
  "/pillowcase/:id/update",
  pillowcase_controller.pillowcase_update_get
);

// POST request to update pillowcase.
router.post(
  "/pillowcase/:id/update",
  pillowcase_controller.pillowcase_update_post
);

// GET request for one pillowcase.
router.get("/pillowcase/:id", pillowcase_controller.pillowcase_detail);

// GET request for list of all pillowcase items.
router.get("/pillowcases", pillowcase_controller.pillowcase_list);

/// bedsheet ROUTES ///

// GET request for creating a bedsheet. NOTE This must come before routes that display bedsheet (uses id).
router.get("/bedsheet/create", bedsheet_controller.bedsheet_create_get);

// POST request for creating bedsheet.
router.post("/bedsheet/create", bedsheet_controller.bedsheet_create_post);

// GET request to delete bedsheet.
router.get("/bedsheet/:id/delete", bedsheet_controller.bedsheet_delete_get);

// POST request to delete bedsheet.
router.post("/bedsheet/:id/delete", bedsheet_controller.bedsheet_delete_post);

// GET request to update bedsheet.
router.get("/bedsheet/:id/update", bedsheet_controller.bedsheet_update_get);

// POST request to update bedsheet.
router.post("/bedsheet/:id/update", bedsheet_controller.bedsheet_update_post);

// GET request for one bedsheet.
router.get("/bedsheet/:id", bedsheet_controller.bedsheet_detail);

// GET request for list of all bedsheet items.
router.get("/bedsheets", bedsheet_controller.bedsheet_list);

/// mattress ROUTES ///

// GET request for creating a mattress. NOTE This must come before routes that display mattress (uses id).
router.get("/mattress/create", mattress_controller.mattress_create_get);

// POST request for creating mattress.
router.post("/mattress/create", mattress_controller.mattress_create_post);

// GET request to delete mattress.
router.get("/mattress/:id/delete", mattress_controller.mattress_delete_get);

// POST request to delete mattress.
router.post("/mattress/:id/delete", mattress_controller.mattress_delete_post);

// GET request to update mattress.
router.get("/mattress/:id/update", mattress_controller.mattress_update_get);

// POST request to update mattress.
router.post("/mattress/:id/update", mattress_controller.mattress_update_post);

// GET request for one mattress.
router.get("/mattress/:id", mattress_controller.mattress_detail);

// GET request for list of all mattress items.
router.get("/mattresses", mattress_controller.mattress_list);

module.exports = router;
