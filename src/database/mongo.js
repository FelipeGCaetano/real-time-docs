import { MongoClient } from "mongodb";
import { config } from "dotenv";
config()

const client = new MongoClient(process.env.MONGO_URL);

let documentosColecao;

try {
    await client.connect();
    
    const db = client.db("database");
    documentosColecao = db.collection("dbdocuments");

    console.log("MongoDB connected!");
} catch (error) {
    console.log(error);
}

export { documentosColecao }