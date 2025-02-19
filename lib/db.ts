import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

/* eslint-disable no-var */
declare global {
  var mongoose: MongooseConn | undefined;
}
/* eslint-enable no-var */

const globalMongoose = global as typeof global & { mongoose: MongooseConn };

let cached: MongooseConn = globalMongoose.mongoose || { conn: null, promise: null };

if (!cached.conn) {
  cached = globalMongoose.mongoose = {
    conn: null,
    promise: mongoose.connect(MONGODB_URL, {
      dbName: "Foodie_Delight",
      bufferCommands: false,
      connectTimeoutMS: 30000,
    }),
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await cached.promise!;
  return cached.conn;
};