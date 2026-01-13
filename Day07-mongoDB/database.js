const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

// Connection URL (from .env)
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

// Database Name
const dbName = 'coding';

async function main() {
  await client.connect();
  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);
  const collection = db.collection('user');

  const insertResult = await collection.insertOne({
    name: "saloni",
    age: 18
  });

  console.log('Inserted document =>', insertResult.insertedId);
}

main()
  .catch(console.error)
  .finally(() => client.close());
