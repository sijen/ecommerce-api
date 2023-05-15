const express = require("express")

// initializing data

const router = express.Router()

router.get("/", (req, res) => {
    res.send("API CREATED SUCCESSFULLY");
  });

module.exports = router