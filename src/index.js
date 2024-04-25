const express = require('express');
const app = express();
const apiRouter = require('./routes/index');
const {webMetrics} = require("./utils/webMetrics");
require('dotenv').config();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());
app.use(apiRouter)
app.get('/confirm', (req, res) => {
    res.send('Bonjour, le serveur Express est en fonctionnement !');
});
app.get('/metrics',webMetrics);
// Démarrer le serveur
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
