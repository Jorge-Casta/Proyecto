import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.MONGODB_URI;
const dbURI = process.env.MONGODB_DB;

try {
    await mongoose.connect(`${dbURI}/${dbName}`, {
       //userNewUrlParser: true,
       //userUnifiedTopology: true,
    });
    console.log (`MongoDB is connected`);
} catch (error) {
    console.log(error);
    process.exit(1);
};