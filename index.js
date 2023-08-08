import mongo from "mongodb";
const { MongoClient } = mongo;
import process from "process";
import { config } from "./config.js";
import operations from "./dbOperations.js";

const configData = config().data;

const url = configData.db.url;
const dbName = configData.db.name;
const dbCollection = configData.db.collection;

const client = new MongoClient(url, configData.db.options);
const db = client.db(dbName);
const collection = db.collection(dbCollection);

const executeFunction = async (eventName) => {
  if (!operations[eventName]) {
    console.error(`Invalid event: ${eventName}`);
    return;
  }

  const result = await operations[eventName](collection);

  console.log(
    `Se ha realizado la operacion ${eventName}, con el siguiente resultado:`,
    { result }
  );
};

const initialize = async () => {
  try {
    await client.connect();
    const eventName = process.env.npm_lifecycle_event;
    await executeFunction(eventName);
  } catch (error) {
    console.log("Ocurrio un error:", error);
  } finally {
    await client.close();
  }
};

initialize();
