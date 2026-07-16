const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getUploads,
  deleteUpload
} = require("../controllers/uploadHistoryController");


// Get all upload history
router.get(
  "/",
  protect,
  getUploads
);


// Delete upload + sales data
router.delete(
  "/:id",
  protect,
  deleteUpload
);


module.exports = router;