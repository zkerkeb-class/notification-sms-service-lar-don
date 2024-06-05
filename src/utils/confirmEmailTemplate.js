exports.confirmEmailTemplate = (userName, serviceName, confirmationUrl) => `
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
