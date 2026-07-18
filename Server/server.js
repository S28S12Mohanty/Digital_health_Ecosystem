import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import doctorRoutes from "./routes/doctorRoutes.js";

import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use("/api/doctors", doctorRoutes);

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Healthcare API Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})

