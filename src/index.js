const express = require('express');
const app = express();
const apiRouter = require('./routes/index');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(apiRouter);

app.listen(process.env.PORT, () => {
  console.info(`[NOTIFS] Serveur démarré sur le port ${process.env.PORT}`);
});
