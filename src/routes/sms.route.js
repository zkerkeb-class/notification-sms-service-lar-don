const express = require("express");
const router = express.Router();
const controller = require("../controllers/sms.controller")

router.post('/send-sms',controller.sendSms);


module.exports = router;
