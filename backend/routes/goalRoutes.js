const express = require("express");
const router = express.Router();

const {
  setGoal,
  getGoal
} = require("../controllers/goalController");


const authMiddleware = require("../middleware/authMiddleware");


// Save / Update Goal

router.post(
  "/",
  authMiddleware,
  setGoal
);


// Get Goal

router.get(
  "/",
  authMiddleware,
  getGoal
);


module.exports = router;