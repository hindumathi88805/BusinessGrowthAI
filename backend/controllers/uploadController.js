const multer = require("multer");
const XLSX = require("xlsx");


const storage = multer.diskStorage({

  destination: function(req, file, cb){
    cb(null, "uploads/");
  },

  filename: function(req, file, cb){
    cb(null, Date.now() + "-" + file.originalname);
  }

});


const upload = multer({
  storage: storage
});


exports.uploadFile = [
  
  upload.single("file"),

  async(req,res)=>{

    try{

      const workbook = XLSX.readFile(req.file.path);

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

      res.status(500).json({
        success:false,
        message:error.message
      });

    }

  }

];