require('dotenv').config();
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

exports.sendSms = async (req, res) => {
  const from = 'Lardon Services';
  const to = req.body.phoneNumber;
  const text = req.body.smsContent;

  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.info(resp);
      return res.send('Message sent successfully');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('There was an error sending the messages.');
    });
};
