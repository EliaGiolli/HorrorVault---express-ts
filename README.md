# 🎃 HorrorVault Express

A Node.js + Express CRUD application designed to manage users, authentication with JWT, and newsletters, with a horror twist.
Secure, modular, and ready to be extended into a full-stack project in the future.

## 🧠 Table of Contents
### Project Information

#### Technologies Used

#### Project Structure

- Installation

- Environment Configuration

- Usage

- Main Endpoints

- Contributing

- License

- Contacts

## 🧟‍♂️ Project Information

HorrorVault Express is a backend application built with Node.js, Express, and MongoDB.
It aims to provide a robust and secure RESTful infrastructure to handle:

- User registration and authentication (signup, login, JWT token generation)

- Newsletter subscriptions

- Email handling using Nodemailer over SMTP/POP3 (showing practical TCP/IP protocol usage in Node.js projects)

- Data persistence with Mongoose

- The project follows a Model–View–Controller (MVC) architecture to keep code clean, scalable, and modular.

## ⚙️ Technologies Used

- **Node.js** — server-side JavaScript runtime

- **Express.js** — routing and middleware management

- **MongoDB** + Mongoose — NoSQL database and ODM

- **JWT (jsonwebtoken)** and **Cookie HTTPOnly** — secure token-based authentication

- **bcrypt** — password hashing

- **Nodemailer** — email sending via SMTP/POP3 protocols for newsletter and notifications

- **Helmet** — HTTP header security

- **dotenv** — environment variable management

- **TypeScript** — fully typed code, executed in development without tsconfig.json

- **Node --watch** — native hot-reload in development without nodemon

## 📁 Project Structure

Typical folder structure:

```bash
horrorvault-express/
│
├── src/
│   ├── config/
│   │   └── nodemailer.ts
        └── env.ts
│   │
│   ├── controllers/
│   │   ├── userController.ts
│   │   └── filmController.ts
│   │
│   ├── services/
│   │   ├── userService.ts
│   │   ├── newsletterService.ts
│   │   └── filmService.ts
│   │
│   ├── models/
│   │   ├── userModel.ts
│   │   └── filmModel.ts
│   │
│   ├── schema/
│   │   └── authSchema.ts
│   │ 
    ├── routes/
│   │   ├── userRoutes.ts
│   │   └── filmRoutes.ts
│   │
│   └── index.ts
    └── server.ts
│
├── .env
├── package.json
└── README.md
```
---
## 🧩 Installation

Clone the repository:
```bash
git clone https://github.com/<your-username>/horrorvault-express.git
cd horrorvault-express
```

Install dependencies:
```bash
npm install
```

Start the server in development mode:
```bash
npm start
```

Uses Node’s native --watch flag to automatically reload on code changes, combined with TypeScript execution without tsconfig.json for fast dev workflow.

## 🔐 Environment Configuration

Create a .env file in the root directory:

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/horrorvault
JWT_SECRET=supersecret123
EMAIL_USER=yourmail@gmail.com
EMAIL_PASS=yourpassword
APP_NAME=HorrorVault
APP_EMAIL=yourmail@gmail.com
```

⚠️ Never commit .env to GitHub — use .gitignore to protect sensitive information.
---
## 🚀 Usage

After starting the server (npm start), the API is available locally at:

```bash
http://localhost:5000/api
```

Example Requests
POST /api/users/signup → register a new user
POST /api/users/login → authenticate user and get JWT token
POST /api/newsletter/subscribe → subscribe to newsletter
GET /api/films → get the list of horror films

## 🧠 Main Endpoints

| Method | Endpoint                    | Description              | Protected | Body / Params                   |
| ------ | --------------------------- | ------------------------ | --------- | ------------------------------- |
| POST   | `/api/users/signup`         | Register a new user      | ❌         | `{ email, password }`           |
| POST   | `/api/users/login`          | Log in and get JWT token | ❌         | `{ email, password }`           |
| POST   | `/api/newsletter/subscribe` | Subscribe to newsletter  | ✅         | `{ email }`                     |
| GET    | `/api/films`                | Get all films            | ✅         | –                               |
| GET    | `/api/films/:id`            | Get a single film        | ✅         | `id` in URL                     |
| PUT    | `/api/films/:id`            | Update a film            | ✅         | `{ title?, description?, ... }` |
| DELETE | `/api/films/:id`            | Delete a film            | ✅         | `id` in URL                     |
| POST   | `/api/films/:id/banner`     | Upload a film banner     | ✅         | `id` in URL + file/body payload |

---
## 🔧 Development Notes

Emails are sent using Nodemailer, demonstrating practical use of SMTP/POP3 protocols, important for showcasing TCP/IP knowledge in Node.js.

Node’s --watch flag provides native hot reload without extra dependencies like nodemon.

TypeScript is executed directly via ts-node in dev environments without the need for a tsconfig.json, simplifying setup and speeding up development.
---
## 🤝 Contributing

Contributions, bug reports, and ideas are welcome!

- Fork the project

- Create a new branch: git checkout -b feature/new-feature

- Commit changes: git commit -m 'Add new feature'

- Push the branch: git push origin feature/new-feature

- Open a Pull Request
---
## 🧾 License

Distributed under the ISC License. See LICENSE for more details.

## 📬 Contacts

👤 Author: Giolli Elia

🔗 GitHub: https://github.com/EliaGiolli
---

❤️ Inspired by Best README Template
