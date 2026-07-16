const XLSX = require("xlsx");
const Sale = require("../models/Sale");
const Upload = require("../models/Upload");


exports.uploadFile = async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        success:false,
        message:"No file uploaded"
      });
    }


    const workbook = XLSX.read(req.file.buffer);

    const sheetName = workbook.SheetNames[0];

    const data = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetName]
    );


    let revenue = 0;
    let products = 0;


    const salesData = data.map((item)=>{

      const quantity = Number(
        item.quantity || item.Quantity || 0
      );


      const totalAmount = Number(
        item.totalAmount || item.TotalAmount || 0
      );


      revenue += totalAmount;
      products += quantity;


      return {

        user:req.user._id,

        product:
          item.product ||
          item.Product ||
          "Unknown",

        quantity,

        price:
          quantity > 0 
          ? totalAmount / quantity 
          : 0,

        totalAmount

      };

    });



    // Save sales
    const savedSales = await Sale.insertMany(
      salesData
    );


    // Save upload history
    const upload = await Upload.create({

      user:req.user._id,

      fileName:req.file.originalname,

      revenue,

      profit:revenue,

      salesIds:savedSales.map(
        sale=>sale._id
      )

    });



    res.json({

      success:true,

      message:"File uploaded successfully",

      report:{

        revenue,

        products,

        profit:revenue

      },

      upload

    });



  } catch(error){

    console.log(error);

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};