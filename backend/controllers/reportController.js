const Sale = require("../models/Sale");
const Expense = require("../models/Expense");

const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");


// Get Report Data
exports.getReport = async(req,res)=>{

  try{

    const sales = await Sale.find({
      user:req.user._id
    });


    const expenses = await Expense.find({
      user:req.user._id
    });



    const totalRevenue = sales.reduce(
      (sum,item)=>sum + item.totalAmount,
      0
    );


    const totalExpense = expenses.reduce(
      (sum,item)=>sum + item.amount,
      0
    );


    const profit = totalRevenue - totalExpense;



    res.json({

      success:true,

      report:{
        totalRevenue,
        totalExpense,
        profit,
        salesCount:sales.length,
        expenseCount:expenses.length
      },

      sales,
      expenses

    });



  }catch(error){

    res.status(500).json({

      success:false,
      message:error.message

    });

  }

};




// Download Excel Report
exports.downloadExcel = async(req,res)=>{

  try{


    const sales = await Sale.find({
      user:req.user._id
    });



    const workbook = new ExcelJS.Workbook();

    const sheet = workbook.addWorksheet(
      "Sales Report"
    );



    sheet.columns=[

      {
        header:"Product",
        key:"product"
      },

      {
        header:"Quantity",
        key:"quantity"
      },

      {
        header:"Price",
        key:"price"
      },

      {
        header:"Total Amount",
        key:"totalAmount"
      }

    ];



    sales.forEach((sale)=>{

      sheet.addRow(sale);

    });



    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );


    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Business_Report.xlsx"
    );



    await workbook.xlsx.write(res);

    res.end();



  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};





// Download PDF Report

exports.downloadPDF = async(req,res)=>{


  try{


    const sales = await Sale.find({
      user:req.user._id
    });


    const expenses = await Expense.find({
      user:req.user._id
    });



    const revenue = sales.reduce(
      (sum,item)=>sum+item.totalAmount,
      0
    );


    const expense = expenses.reduce(
      (sum,item)=>sum+item.amount,
      0
    );


    const profit = revenue-expense;



    const doc = new PDFDocument();



    res.setHeader(
      "Content-Type",
      "application/pdf"
    );


    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Business_Report.pdf"
    );



    doc.pipe(res);



    doc.fontSize(22)
    .text("AI Business Growth Report");



    doc.moveDown();



    doc.fontSize(14)
    .text(`Revenue : ₹${revenue}`)

    .text(`Expense : ₹${expense}`)

    .text(`Profit : ₹${profit}`);



    doc.end();



  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }


};