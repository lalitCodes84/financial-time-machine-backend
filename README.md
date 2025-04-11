# 📊 Financial Projection Backend

This backend API handles user registration, login, and financial projection data input. It calculates financial projections based on user data like income, savings, and goals. JWT authentication is used to secure user-specific routes.

---

## ✨ Getting Started

### Prerequisites
- Node.js
- MongoDB

### Setup
```bash
git clone <repo-url>
cd <project-folder>
npm install
```

### Environment Variables
Create a `.env` file in the root with the following:
```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

### Start Server
```bash
npm start
```

---

## 🧑‍💼 User Routes

### 🔐 Register
**POST** `/api/auth/register`
```json
{
  "name": "Lalit Sharma",
  "username": "lalit123",
  "email": "lalit@example.com",
  "password": "password123"
}
```

### 🔑 Login
**POST** `/api/auth/login`
```json
{
  "email": "lalit@example.com",
  "password": "password123"
}
```
Returns: JWT Token

---

## 💰 Finance Routes
All finance routes are protected. Add the token in headers:
```
Authorization: Bearer <token>
```

### ➕ Input Finance Data
**POST** `/api/finance/input`
```json
{
  "age": 25,
  "monthlyIncome": 50000,
  "monthlyFixedExpenses": 20000,
  "monthlySavings": 10000,
  "currentSavings": 50000,
  "incomeGrowthRate": 10,
  "careerChange": "Yes",
  "newExpectedIncome": 60000,
  "changeYear": 2027,
  "financialGoals": [
    {
      "goal": "Buy a Laptop",
      "amount": 70000,
      "targetYear": 2026
    },
    {
      "goal": "Europe Trip",
      "amount": 200000,
      "targetYear": 2029
    }
  ]
}
```

### 📈 Get Finance Projection
**GET** `/api/finance/projection/:id`
- `:id` is the Finance document's ID.

Returns:
```json
{
  "finance": { ... },
  "projection": [
    { "year": 1, "balance": 120000 },
    { "year": 2, "balance": 250000 },
    ...
  ]
}
```

---

## 🧐 Logic Behind Projection
- Calculates cumulative balance each year based on:
  - Monthly income, expenses, savings
  - Income growth rate
  - Career changes (optional)
  - Current savings
- Considers future goals & timeline

---

## 📦 Folder Structure
```
├── controllers/
│   └── authController.js
│   └── financeController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── userModel.js
│   └── financeModel.js
├── routes/
│   └── authRoutes.js
│   └── financeRoutes.js
├── utils/
│   └── projectionUtils.js
├── server.js
```

---

## 🧑‍💻 Developed by
**Lalit Sharma**
- Full-stack Developer
- MERN | Express | MongoDB | React

For any questions or support, feel free to reach out!

