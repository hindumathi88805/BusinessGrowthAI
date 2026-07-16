const express = require("express");
const router = express.Router();

const {
  register,
  login,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");


router.post("/register", register);

router.post("/login", login);


// Get logged-in user profile
router.get("/profile", authMiddleware, async (req, res) => {

  try {

    res.json({

      success: true,

      user: req.user

    });


  } catch(error) {

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

});


module.exports = router;