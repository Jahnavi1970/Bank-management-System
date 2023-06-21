import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import customerRouter from "./routes/customerRoutes.js";
import sendRouter from "./routes/send.js";
import transactionRouter from "./routes/transactionRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

app.use("/customers", customerRouter);
app.use("/send", sendRouter);
app.use("/transactions", transactionRouter);

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
