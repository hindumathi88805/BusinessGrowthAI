const Expense = require("../models/Expense");

// Add Expense
exports.addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Expense added successfully",
      expense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get All Expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      count: expenses.length,
      expenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Expense
exports.updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Expense updated successfully",
      expense
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!expense) {
      return res.status(404).json({
        success: false,
        message: "Expense not found"
      });
    }

    await expense.deleteOne();

    res.status(200).json({
      success: true,
      message: "Expense deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};