const express = require('express');
const router = express.Router();
const validator = require("validator");
router.post(
  '/',
  (req, res) => {
    if (!validator.isEmail(req.body.email)) {
      if (!validator.isAlphanum) {
        
      }
    } else {
      res.json({result: "yes"});
    }
    console.log(req.body);
  });

module.exports = router;
