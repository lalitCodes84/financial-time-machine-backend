# 💸 Financial Time Machine (Backend)

This backend powers the Financial Time Machine app — a personal finance tool that allows users to input their financial data and get projections of their financial future using AI-like logic.

---

## 🚀 Features

- 🔐 User Registration and Login with JWT Authentication
- 💼 Input Financial Data (income, expenses, savings, goal)
- 📈 Project Financial Growth Over 5 Years
- 🔒 Protected Routes for Authenticated Users Only

---

## 📁 Folder Structure

```
project/
│
├── controllers/
│   └── authController.js
│   └── financeController.js
│
├── models/
│   └── userModel.js
│   └── financeModel.js
│
├── routes/
│   └── authRoutes.js
│   └── financeRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── utils/
│   └── projectionUtils.js
│
├── app.js
├── .env
└── package.json
```

---

## ⚙️ Setup Instructions

1. **Clone the repo & install dependencies:**

```bash
npm install
```

2. **Create a `.env` file:**

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

3. **Run the server:**

```bash
node server.js
```

---

## 🔐 AUTH Routes

### ✅ Register a User

```
POST /api/auth/register
```

#### Request Body:

```json
{
  "name": "Lalit Sharma",
  "username": "lalitsharma",
  "email": "lalit@example.com",
  "password": "123456"
}
```

#### Success Response:
```json
{
  "message": "User registered successfully"
}
```

---

### 🔓 Login a User

```
POST /api/auth/login
```

#### Request Body:

```json
{
  "email": "lalit@example.com",
  "password": "123456"
}
```

#### Success Response:
```json
{
  "message": "Login successful",
  "token": "<JWT Token>"
}
```

Use this token in `Authorization` header as:

```
Authorization: Bearer <token>
```

---

## 💼 Finance Routes (Protected)

### ➕ Input Finance Data

```
POST /api/finance/input
```

#### Headers:
```
Authorization: Bearer <token>
```

#### Request Body:

```json
{
  "income": 50000,
  "expenses": 20000,
  "savings": 10000,
  "goal": "Buy a Laptop"
}
```

#### Response:

```json
{
  "_id": "finance_id",
  "income": 50000,
  "expenses": 20000,
  "savings": 10000,
  "goal": "Buy a Laptop",
  "userId": "user_id",
  "createdAt": "...",
  "__v": 0
}
```

---

### 📊 Get Financial Projection

```
GET /api/finance/projection/:id
```

- `:id` = ID of the finance document received from above response
- Requires token in headers

#### Response:

```json
{
  "finance": {
    "_id": "...",
    "income": 50000,
    "expenses": 20000,
    "savings": 10000,
    "goal": "Buy a Laptop",
    "userId": "...",
    "createdAt": "...",
    "__v": 0
  },
  "projection": [
    { "year": 1, "balance": 370000 },
    { "year": 2, "balance": 730000 },
    { "year": 3, "balance": 1090000 },
    { "year": 4, "balance": 1450000 },
    { "year": 5, "balance": 1810000 }
  ]
}
```

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Bcrypt for password hashing

---

## ✨ Contribution

- Backend: [Lalit Sharma]
- Frontend: [Zuba Alam]

---

## 🧠 Project By
Hackathon - Masai School 🚀  
Theme: Financial Time Machine

---