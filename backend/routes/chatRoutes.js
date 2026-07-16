const express = require("express");
const router = express.Router();

const Sale = require("../models/Sale");
const Expense = require("../models/Expense");

const protect = require("../middleware/authMiddleware");


router.post("/", protect, async(req,res)=>{

  try{

    const {question} = req.body;


    const sales = await Sale.find({
      user:req.user._id
    });


    const expenses = await Expense.find({
      user:req.user._id
    });



    const totalSales = sales.reduce(
      (sum,sale)=>sum + sale.totalAmount,
      0
    );


    const totalExpenses = expenses.reduce(
      (sum,expense)=>sum + expense.amount,
      0
    );


    const profit = totalSales - totalExpenses;



    let answer = "";



    if(question.toLowerCase().includes("profit")){

      answer =
      `Your current profit is ₹${profit}. `+
      `Try increasing sales and controlling expenses to improve profit.`;

    }


    else if(question.toLowerCase().includes("expense")){

      answer =
      `Your total expenses are ₹${totalExpenses}. `+
      `Review unnecessary costs and reduce spending.`;

    }


    else if(question.toLowerCase().includes("sales")){

      answer =
      `Your total sales are ₹${totalSales}. `+
      `Focus on promoting best-selling products.`;

    }


    else{

      answer =
      `Your business summary: Revenue ₹${totalSales}, Expenses ₹${totalExpenses}, Profit ₹${profit}. `+
      `Keep monitoring your business performance.`;

    }



    res.json({

      success:true,
      answer

    });



  }catch(error){


    res.status(500).json({

      success:false,
      message:error.message

    });


  }


});


module.exports = router;