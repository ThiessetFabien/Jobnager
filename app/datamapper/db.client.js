import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL ?? "mongodb://localhost:27017");

client.connect();

export const db = client.db("msjm");