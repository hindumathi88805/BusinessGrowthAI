const express = require("express");
const router = express.Router();

const {
  addSale,
  getSales,
  updateSale,
  deleteSale
} = require("../controllers/saleController");

const protect = require("../middleware/authMiddleware");

router.post("/", protect, addSale);
router.get("/", protect, getSales);

router.put("/:id", protect, updateSale);
router.delete("/:id", protect, deleteSale);

module.exports = router;