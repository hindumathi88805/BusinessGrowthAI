require("dotenv").config();
const { MongoClient } = require("mongodb");

async function run() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    console.log("✅ Connected successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close().catch(() => {});
  }
}

run();