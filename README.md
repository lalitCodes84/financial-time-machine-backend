# 💸 Financial Time Machine

A full-stack app to track your income, expenses, and future savings projections. Built with **Node.js**, **Express**, and **MongoDB** for the backend.

🔗 **Live API URL**: [https://financial-time-machine-backend.onrender.com](https://financial-time-machine-backend.onrender.com)

---

## 📦 Features

- ✅ User Registration and Login (with JWT)
- 💰 Add Income and Expenses
- 📊 Calculate and Get 5-Year Financial Projection
- 🔐 Protected Routes with Authentication

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Auth**: JWT (JSON Web Tokens)
- **Deployment**: [Render.com](https://render.com/)

---

## 🚀 API Endpoints

### 🔐 Auth Routes (`/api/auth`)

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| POST   | `/register`   | Register user      |
| POST   | `/login`      | Login user & get token |

### 💸 Finance Routes (`/api/finance`)

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| POST   | `/`                 | Add income & expenses      |
| GET    | `/projection`       | Get 5-year savings projection |

> ⚠️ Finance routes are protected by JWT token in headers.

---

## 🔧 Environment Variables

You must create a `.env` file in the root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🛠️ Run Locally

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm start
```

---

## 📮 Sample Request (Protected Route)

```http
GET /api/finance/projection
Authorization: Bearer <your_token>
```

---

## 🧠 How Projection Works?

Simple 5-year savings projection based on:

```js
balance += (income - expenses) * 12;
```

Each year calculates your new balance based on annual savings.

---

## ✨ Author

Made with ❤️ by Lalit Sharma