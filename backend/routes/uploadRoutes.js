const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");


if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "uploads/");
  },

  filename: function(req, file, cb){
    cb(null, Date.now() + "-" + file.originalname);
  }
});


const upload = multer({
  storage: storage
});


const {
  uploadFile
} = require("../controllers/uploadController");


router.post("/", upload.single("file"), uploadFile);


module.exports = router;