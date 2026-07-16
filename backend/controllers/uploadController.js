const XLSX = require("xlsx");


exports.uploadFile = async(req,res)=>{

  try{

    const workbook = XLSX.read(req.file.buffer);

    const sheetName = workbook.SheetNames[0];

    const data = XLSX.utils.sheet_to_json(
      workbook.Sheets[sheetName]
    );


    let revenue = 0;
    let products = 0;


    data.forEach((item)=>{

      revenue += Number(item.totalAmount || 0);

      products += Number(item.quantity || 0);

    });


    res.json({

      success:true,

      report:{
        revenue,
        products,
        profit: revenue
      }

    });


  }catch(error){

    console.log(error);

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};