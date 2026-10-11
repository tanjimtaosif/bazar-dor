import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongo?: { uri: string; client: MongoClient };
};

// getClient
function getClient() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not set in the environment variables.");
  }

  if (globalForMongo.mongo?.uri === uri) return globalForMongo.mongo.client;

  const client = new MongoClient(uri);

  if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongo = { uri, client };
  }

  return client;
}

export const client = getClient();

export const db = client.db(process.env.MONGODB_DB || undefined);
