const Goal = require("../models/Goal");


// Add or Update Business Goal

exports.setGoal = async (req, res) => {

  try {


    const {
      revenueGoal,
      expenseLimit,
      salesTarget
    } = req.body;



    let goal = await Goal.findOne({
      user: req.user._id
    });



    if(goal){

      goal.revenueGoal = revenueGoal;
      goal.expenseLimit = expenseLimit;
      goal.salesTarget = salesTarget;


      await goal.save();


    }else{


      goal = await Goal.create({

        user:req.user._id,

        revenueGoal,

        expenseLimit,

        salesTarget

      });


    }



    res.json({

      success:true,

      message:"Business goal saved successfully",

      goal

    });



  } catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }

};




// Get Business Goal

exports.getGoal = async (req,res)=>{


  try{


    const goal = await Goal.findOne({

      user:req.user._id

    });



    res.json({

      success:true,

      goal

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};