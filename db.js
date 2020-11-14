import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser:true, 
        useFindAndModify: false,
    }
);

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Conneted to DB");
const handleError = (error) => console.log(`❌ Error on DB Connection:${error}`);
db.once("open", handleOpen); // open once
db.on("error", handleError);
