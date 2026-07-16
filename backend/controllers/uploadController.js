const XLSX = require("xlsx");
const Sale = require("../models/Sale");


exports.uploadFile = async (req, res) => {

  try {

    const workbook = XLSX.read(req.file.buffer);

    const sheetName = workbook.SheetNames[0];

    const data = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetName]
    );


    let revenue = 0;
    let products = 0;


    const salesData = data.map((item)=>{

      const quantity = Number(item.quantity || 0);

      const totalAmount = Number(item.totalAmount || 0);


      revenue += totalAmount;

      products += quantity;


      return {
        user:req.user._id,
        product:item.product,
        quantity,
        price: totalAmount / quantity,
        totalAmount
      };

    });


    await Sale.insertMany(salesData);


    res.json({

      success:true,

      report:{
        revenue,
        products,
        profit:revenue
      }

    });


  } catch(error){

    console.log(error);

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};