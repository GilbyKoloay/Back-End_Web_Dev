const { MongoClient } = require("mongodb");
const uri = "mongodb://user_latihan:123456@localhost:27017";

const client = new MongoClient(uri);

(async () => {
  try {
    await client.connect();
    console.log(`Connected to database.`);
  } catch (error) {
    console.log(`Failed connect to database (${error}).`);
  }
})();

module.exports = client;
