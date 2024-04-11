const express = require("express");
const router = express.Router();
const controller = require("../controllers/mail.controller")

router.post('/send-confirm',controller.sendConfirmEmail);

module.exports = router;
