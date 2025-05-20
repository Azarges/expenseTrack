const {
  addExpense,
  getExpensesByUser,
} = require("../controllers/expense.controller");
const authentication = require("../middlewares/auth.middleware");
const { validate } = require("../middlewares/validate.middleware");

const router = require("express").Router();

router.post("/", authentication, validate, addExpense);

router.get("/:id", authentication, getExpensesByUser);

module.exports = router;

// localhot:3000/expenses
