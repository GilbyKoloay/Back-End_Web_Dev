const { MongoClient } = require("mongodb");
const uri = "mongodb://user_latihan:123456@localhost:27017";

(async () => {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db("db_latihan");

    db.collection("users")
      .find()
      .toArray((err, result) => {
        if (err) throw err;

        console.log(result);
      });
  } catch (error) {
    console.log(error);
  }
})();
