const mongoose = require("mongoose");

const uploadReportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    revenue: {
      type: Number,
      default: 0,
    },

    expense: {
      type: Number,
      default: 0,
    },

    profit: {
      type: Number,
      default: 0,
    },

    products: {
      type: Number,
      default: 0,
    },

    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("UploadReport", uploadReportSchema);