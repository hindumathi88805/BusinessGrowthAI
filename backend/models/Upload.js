const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema(
{
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },

  fileName:{
    type:String,
    required:true
  },

  revenue:{
    type:Number,
    default:0
  },

  profit:{
    type:Number,
    default:0
  },

  salesIds:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Sale"
    }
  ]

},
{
  timestamps:true
}
);


module.exports = mongoose.model("Upload", uploadSchema);