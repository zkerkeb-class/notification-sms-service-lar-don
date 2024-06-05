# WEB SERVICE  - Service de Notifications, Mail et SMS

## Description du service

### Objectif
Créer un service capable d'envoyer des notifications par e-mail et SMS aux utilisateurs.

### Fonctionnalités principales
- **Intégration avec des services de messagerie e-mail et des passerelles SMS.**
- **Envoi de mails pour la confirmation de l'adresse e-mail de l'utilisateur et des codes pour la réinitialisation de mot de passe.**

## Membres du projet
- **Lucas SEVAULT**
- **Aubin OLIVRIE**
- **Ryan PEYROT**

## Installation et configuration

1. Exécutez `npm install`.
2. Créez un fichier `.env` avec la configuration suivante :

```env
PORT=4003
EMAIL=
EMAIL_PSW=
VONAGE_API_KEY=
VONAGE_API_SECRET=
MAILING_API=http://localhost:4003
FRONT_URL=http://localhost:3001
```

## Lancement du projet
Exécutez npm start pour démarrer le serveur.
