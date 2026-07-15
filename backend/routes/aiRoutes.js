const express = require("express");
const router = express.Router();

const Sale = require("../models/Sale");
const Expense = require("../models/Expense");


router.get("/suggestions", async (req, res) => {

  try {

    const sales = await Sale.find();
    const expenses = await Expense.find();


    let suggestions = [];


    const totalSales = sales.reduce(
      (sum, sale) => sum + sale.totalAmount,
      0
    );


    const totalExpenses = expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );


    const profit = totalSales - totalExpenses;


    if(totalSales > 50000){

      suggestions.push(
        "Your sales are good. Consider expanding your product range."
      );

    }


    if(totalExpenses > totalSales * 0.5){

      suggestions.push(
        "Expenses are high. Try reducing unnecessary costs."
      );

    }


    if(profit > 0){

      suggestions.push(
        "Your business is profitable. Keep maintaining growth."
      );

    }


    res.json({

      success:true,

      suggestions

    });


  } catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

});


module.exports = router;