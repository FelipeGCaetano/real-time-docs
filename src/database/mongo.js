import { MongoClient } from "mongodb";
import { config } from "dotenv";
config()

const client = new MongoClient(process.env.MONGO_URL);

let docCollection;

try {
    await client.connect();
    
    const db = client.db("database");
    docCollection = db.collection("dbdocuments");

    console.log("MongoDB connected!");
} catch (error) {
    console.log(error);
}

export { docCollection }