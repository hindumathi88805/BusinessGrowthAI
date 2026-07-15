const express = require("express");
const router = express.Router();

const Sale = require("../models/Sale");
const Expense = require("../models/Expense");


router.get("/", async (req, res) => {

  try {

    const sales = await Sale.find();

    const expenses = await Expense.find();


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


    res.json({

      success: true,

      dashboard: {

        totalSales,
        totalExpenses,

        profit: totalSales - totalExpenses,

        totalProductsSold

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

});


module.exports = router;