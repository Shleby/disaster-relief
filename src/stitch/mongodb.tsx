import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas"
);

const Disasters = mongoClient
  .db("CersDB")
  .collection("Disasters")
  .find()
  .toArray();

export default { Disasters };
