const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");


const {
  getReport,
  downloadExcel,
  downloadPDF
} = require("../controllers/reportController");



// Get report data
router.get(
  "/",
  protect,
  getReport
);


// Download Excel
router.get(
  "/excel",
  protect,
  downloadExcel
);


// Download PDF
router.get(
  "/pdf",
  protect,
  downloadPDF
);



module.exports = router;