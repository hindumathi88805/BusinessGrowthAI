const Sale = require("../models/Sale");
const Expense = require("../models/Expense");

exports.getDashboard = async (req, res) => {
  try {

    const sales = await Sale.find({
      user: req.user._id,
    });

    const expenses = await Expense.find({
      user: req.user._id,
    });


    const totalSales = sales.reduce(
      (sum, sale) => sum + sale.totalAmount,
      0
    );

    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    const totalProductsSold = sales.reduce(
      (sum, sale) => sum + sale.quantity,
      0
    );


    const profit = totalSales - totalExpenses;


    res.status(200).json({
      success: true,

      dashboard: {
        totalSales,
        totalExpenses,
        profit,
        totalProductsSold,
      },

      sales,
      expenses
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};