const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.post(
  '/',
  body('name').isAlphanumeric().isLength({ min: 3, max: 20 }),
  body('email').isEmail(),
  body('message').isAlphanumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.errors);
      res.render('index', { title: 'Express', errors: errors.errors, result: null });
    } else {
      console.log(req.body.email);
      res.render('index', { title: 'Express', result: req.body });
    }
  });

module.exports = router;
