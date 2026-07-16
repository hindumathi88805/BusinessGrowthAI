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

    // Total Revenue
    const totalSales = sales.reduce(
      (sum, sale) => sum + sale.totalAmount,
      0
    );

    // Total Expenses
    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    // Products Sold
    const totalProductsSold = sales.reduce(
      (sum, sale) => sum + sale.quantity,
      0
    );

    // Net Profit
    const profit = totalSales - totalExpenses;

    // Business Health Score
    let healthScore = 0;
    let healthStatus = "";

    if (profit <= 0) {
      healthScore = 30;
      healthStatus = "Poor 🔴";
    } else if (profit < 20000) {
      healthScore = 55;
      healthStatus = "Average 🟠";
    } else if (profit < 50000) {
      healthScore = 75;
      healthStatus = "Good 🟡";
    } else if (profit < 100000) {
      healthScore = 90;
      healthStatus = "Excellent 🟢";
    } else {
      healthScore = 100;
      healthStatus = "Outstanding ⭐";
    }

    // AI Forecast
    const predictedRevenue = Math.round(totalSales * 1.05);
    const predictedProfit = Math.round(profit * 1.05);
    const expectedGrowth = "5%";

    res.status(200).json({

      success: true,

      dashboard: {

        totalSales,
        totalExpenses,
        profit,
        totalProductsSold,

        healthScore,
        healthStatus,

        predictedRevenue,
        predictedProfit,
        expectedGrowth

      },

      sales,
      expenses

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};