const Upload = require("../models/Upload");
const Sale = require("../models/Sale");


// Get Upload History
exports.getUploads = async (req, res) => {

  try {

    const uploads = await Upload.find({
      user: req.user._id
    }).sort({
      createdAt: -1
    });


    res.json({
      success:true,
      uploads
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};



// Delete Upload + Related Sales
exports.deleteUpload = async (req,res)=>{

  try{

    const upload = await Upload.findOne({
      _id:req.params.id,
      user:req.user._id
    });


    if(!upload){

      return res.status(404).json({
        success:false,
        message:"Upload not found"
      });

    }


    // Delete related sales
    await Sale.deleteMany({
      _id:{
        $in: upload.salesIds
      }
    });


    // Delete upload history
    await upload.deleteOne();


    res.json({

      success:true,

      message:"Upload deleted successfully"

    });


  }catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};