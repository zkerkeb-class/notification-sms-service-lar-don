const express = require("express");
const router = express.Router();
const controller = require("../controllers/mail.controller")

router.post('/send-email',controller.sendConfirmEmail);

module.exports = router;
