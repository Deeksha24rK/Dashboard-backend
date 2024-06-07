import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.model.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware - used to handle JSON data sent in the body of HTTP requests, Express will automatically parse JSON-formatted request bodies and make the parsed data available on req.body
app.use(express.json());

// Connect to DataBase
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to the DashboardDB"))
    .catch(() => console.log("Connection Failed"));

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.get("/", (req, res) => {
    res.send("Hey there");
});

// Get Users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

// Create users
app.post("/api/users", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
