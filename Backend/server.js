import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/api", chatRoutes);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://vaibhavratnesh24:Turnuptheradio@cluster0.zglwqvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected with Database!");

        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`);
        });
    } catch (err) {
        console.log("Failed to connect with Db", err);
    }
};

connectDB();
