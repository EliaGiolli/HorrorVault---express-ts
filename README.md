# 🎃 HorrorVault Express

Un'applicazione CRUD Node.js + Express progettata per gestire utenti, autenticazione JWT e newsletter, con un tocco horror.
Sicura, modulare e pronta a essere estesa in un progetto full-stack in futuro.

## 🧠 Indice

### Informazioni sul progetto

**Tecnologie usate**

Struttura del progetto

- Installazione

- Configurazione ambiente

- Utilizzo

- Endpoints principali

- Contribuire

- Licenza

- Contatti

## 🧟‍♂️ Informazioni sul progetto

HorrorVault Express è un’applicazione backend sviluppata in Node.js, Express e MongoDB.
L’obiettivo è creare un’infrastruttura RESTful solida e sicura per gestire:

- Utenti e autenticazione (registrazione, login, token JWT)

- Iscrizioni a una newsletter

- Integrazione con Nodemailer per l’invio email

- Dati persistenti con Mongoose

Il progetto segue un’architettura MVC (Model–View–Controller) per mantenere il codice pulito, scalabile e modulare.

## ⚙️ Tecnologie usate

- **Node.js** — runtime JavaScript lato server

- **Express.js** — web framework per la gestione delle rotte e middleware

- **MongoDB + Mongoose** — database NoSQL e ODM

- **JWT (jsonwebtoken)** — autenticazione sicura basata su token

- **bcrypt** — hashing delle password

- **Nodemailer** — invio email per newsletter o notifiche

- **Helmet** — protezione HTTP headers

- **dotenv** — gestione delle variabili d’ambiente

- **Nodemon** — reload automatico in sviluppo

## 📁 Struttura del progetto

Esempio tipico della struttura delle cartelle:
``` bash
horrorvault-express/
│
├── src/
│   ├── config/
│   │   └── nodemailer.js
│   │
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── newsletterController.js
│   │   └── filmController.js
│   │
│   ├── services/
│   │   ├── userService.js
│   │   ├── newsletterService.js
│   │   └── filmService.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── filmModel.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── newsletterRoutes.js
│   │   └── filmRoutes.js
│   │
│   └── index.js
│
├── .env
├── package.json
└── README.md
```

## 🧩 Installazione
1. Clona la repo
```bash
git clone https://github.com/<tuo-username>/horrorvault-express.git
```
```bash
cd horrorvault-express
```

2. Installa le dipendenze
```bash
npm install
```
3. Avvia il server in modalità sviluppo
```bash
npm start
```

## 🔐 Configurazione ambiente

Crea un file .env nella root del progetto e inserisci le seguenti variabili:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/horrorvault
JWT_SECRET=supersegreto123
EMAIL_USER=tuamail@gmail.com
EMAIL_PASS=tuapassword
```

⚠️ Non committare mai il file .env su GitHub.
Usa .gitignore per proteggerlo.

## 🚀 Utilizzo

Una volta avviato il server (npm start), puoi accedere alle API locali su:
```bash
http://localhost:5000/api
```

### Esempio richieste:

```bash
POST /api/users/signup → registra un nuovo utente

POST /api/users/login → autenticazione e rilascio token JWT

POST /api/newsletter/subscribe → iscrive un utente alla newsletter

GET /api/films → lista dei film horror salvati
```

## 🧠 Endpoints principali
Metodo	Rotta	Descrizione
POST	/api/users/signup	Crea un nuovo utente
POST	/api/users/login	Login e generazione token JWT
POST	/api/newsletter/subscribe	Iscrizione newsletter
GET	/api/films	Ottiene tutti i film
PUT	/api/films/:id	Aggiorna un film
DELETE	/api/films/:id	Elimina un film

## 🤝 Contribuire

Contributi, segnalazioni bug e idee sono sempre benvenuti!

- Fai un fork del progetto

- Crea un nuovo branch (git checkout -b feature/nuova-feature)

- Fai commit delle modifiche (git commit -m 'Aggiunta nuova feature')

- Fai push sul branch (git push origin feature/nuova-feature)

- Apri una Pull Request

## 🧾 Licenza

Distribuito sotto licenza ISC.
Vedi LICENSE per ulteriori dettagli.

## 📬 Contatti

👤 Autore: Giolli Elia

🔗 GitHub: https://github.com/EliaGiolli

❤️ Ispirato da Best README Template

