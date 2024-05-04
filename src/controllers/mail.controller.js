const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { confirmEmailTemplate } = require('../utils/confirmEmailTemplate');
require('dotenv').config();

// Créer un transporter pour nodemailer avec les détails de votre service d'email
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez votre service d'email ici
  auth: {
    user: process.env.EMAIL, // Votre adresse email
    pass: process.env.EMAIL_PSW, // Votre mot de passe d'email
  },
});

exports.sendConfirmEmail = async (req, res) => {
  // Récupérer les détails de l'email à partir du corps de la requête
  const user = req.body.user;
  const token = crypto.randomBytes(32).toString('hex');
  const subject = "Confirmation d'inscription";
  const text = confirmEmailTemplate(
    user.username,
    'Lardon Services',
    `${process.env.FRONT_URL}/confirm-email?token=${token}`
  );

  try {
    await transporter.sendMail({
      from: process.env.EMAIL, // L'adresse email de l'expéditeur
      to: user.email, // Liste des destinataires
      subject: subject, // Sujet de l'email
      html: text, // corps du texte
    });

    return res.send({
      data: {
        email: user.email,
        token: token,
      },
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email: ', error);
    return res.status(500).send('Error sending email');
  }
};
