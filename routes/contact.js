const express = require('express');
const router = express.Router();
const validator = require("validator");
const sendEmail = require("../controllers/contactController.js");
router.post(
  '/',
  async (req, res) => {
    if (!validator.isEmail(req.body.email)) {
      await res.json({ result: "no", at: 'email', message: "invalide email address !" });
    } else if (validator.isEmpty(req.body.message)) {
      await res.json({ result: "no", at: 'message', message: "you need to write a message !" });
    } else {
      // sendEmail({
      //   to: 'ourdou.marouane17@gmail.com',
      //   from: req.body.email,
      //   subject: 'Testing Email Sends',
      //   html: `<h1>hello, world!</h1><p>${req.body.message}</p>`,
      // });
      res.json({ result: "yes", message: "the email has been sent" });
    }
    console.log(req.body);
  });

module.exports = router;
