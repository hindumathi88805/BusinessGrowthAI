const Sale = require("../models/Sale");

// Add Sale
exports.addSale = async (req, res) => {
  try {
    const sale = await Sale.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Sale added successfully",
      sale,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Sales
exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find({
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      count: sales.length,
      sales,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Sale
exports.updateSale = async (req, res) => {
  try {
    const sale = await Sale.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!sale) {
      return res.status(404).json({
        success: false,
        message: "Sale not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Sale updated successfully",
      sale
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete Sale
exports.deleteSale = async (req, res) => {
  try {

    const sale = await Sale.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!sale) {
      return res.status(404).json({
        success: false,
        message: "Sale not found"
      });
    }

    await sale.deleteOne();

    res.status(200).json({
      success: true,
      message: "Sale deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};