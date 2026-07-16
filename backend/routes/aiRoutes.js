const express = require("express");
const router = express.Router();

const Sale = require("../models/Sale");
const Expense = require("../models/Expense");

const protect = require("../middleware/authMiddleware");


router.get("/suggestions", protect, async (req, res) => {

  try {


    const sales = await Sale.find({
      user: req.user._id
    });


    const expenses = await Expense.find({
      user: req.user._id
    });



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



    const profitMargin =
      totalSales > 0
      ? (profit / totalSales) * 100
      : 0;




    // Sales suggestions

    if(totalSales === 0){

      suggestions.push(
        "Start adding sales data to get business insights."
      );

    }
    else if(totalSales > 50000){

      suggestions.push(
        "Your sales performance is strong. Consider expanding your product range."
      );

    }
    else{

      suggestions.push(
        "Sales are low. Try marketing campaigns and customer offers."
      );

    }




    // Expense suggestions

    if(totalExpenses > totalSales * 0.5){

      suggestions.push(
        "Expenses are high compared to revenue. Reduce unnecessary costs."
      );

    }
    else{

      suggestions.push(
        "Expense management is healthy. Continue monitoring spending."
      );

    }




    // Profit suggestions

    if(profit > 0){

      suggestions.push(
        `Business is profitable with ${profitMargin.toFixed(2)}% profit margin. Keep growing.`
      );

    }
    else{

      suggestions.push(
        "Business is running in loss. Focus on increasing sales and reducing expenses."
      );

    }



    res.json({

      success:true,

      analysis:{
        totalSales,
        totalExpenses,
        profit,
        profitMargin:profitMargin.toFixed(2)
      },

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