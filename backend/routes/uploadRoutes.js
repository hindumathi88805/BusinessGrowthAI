const express = require("express");
const router = express.Router();

const multer = require("multer");

const protect = require("../middleware/authMiddleware");

const {
  uploadFile
} = require("../controllers/uploadController");


const storage = multer.memoryStorage();

const upload = multer({
  storage: storage
});


router.post(
  "/",
  protect,
  upload.single("file"),
  uploadFile
);


module.exports = router;