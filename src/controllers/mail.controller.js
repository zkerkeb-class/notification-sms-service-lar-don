const nodemailer = require('nodemailer');
require('dotenv').config();

// Créer un transporter pour nodemailer avec les détails de votre service d'email
let transporter = nodemailer.createTransport({
    service: 'gmail', // Utilisez votre service d'email ici
    auth: {
        user: process.env.EMAIL, // Votre adresse email
        pass: process.env.EMAIL_PSW, // Votre mot de passe d'email
    },
});

exports.sendConfirmEmail = async (req, res) => {
     // Récupérer les détails de l'email à partir du corps de la requête
    const user = req.body.user;
    const subject = "Confirmation d'inscription"
    const text = confirmEmailTemplate(user.username, "Lardon Services", "http://localhost:4003/confirm")

    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL, // L'adresse email de l'expéditeur
            to: user.email, // Liste des destinataires
            subject: subject, // Sujet de l'email
            html: text, // corps du texte
        });

        console.log('Message sent: %s', info.messageId);
        return res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email: ', error);
        return res.status(500).send('Error sending email');
    }
};

const confirmEmailTemplate = (userName, serviceName, confirmationUrl) => `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Confirmation d'inscription</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color:#000;
  }
  .button {
    background-color: #0066cc;
    color: #ffffff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-top: 20px;
  }
  .button:visited {
    color: inherit; 
    text-decoration: none;
    }
  .footer {
    margin-top: 20px;
    text-align: center;
    font-size: 0.9em;
    color: #777777;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>Bienvenue chez ${serviceName}!</h1>
    <p>Merci de vous être inscrit, ${userName}.</p>
    <p>Pour confirmer votre inscription, veuillez cliquer sur le bouton ci-dessous :</p>
    <a href="${confirmationUrl}" class="button">Confirmer mon inscription</a>
    <p>Si vous n'avez pas créé de compte chez ${serviceName}, veuillez ignorer cet email ou nous contacter.</p>
    <div class="footer">
      <p>Si vous rencontrez des problèmes pour cliquer sur le bouton "Confirmer mon inscription", copiez et collez l'URL ci-dessous dans votre navigateur web :</p>
      <p><a href="${confirmationUrl}">${confirmationUrl}</a></p>
    </div>
  </div>
</body>
</html>
`;
