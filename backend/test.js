require("dotenv").config();
const mongoose = require("mongoose");

async function testConnection() {
  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Full error:");
    console.error(err);
    process.exit(1);
  }
}

testConnection();