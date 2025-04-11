const express = require("express");
const { createFinance, getProjection } = require("../controllers/financeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/input", authMiddleware, createFinance);
router.get("/projection/:id", authMiddleware, getProjection);

module.exports = router;
