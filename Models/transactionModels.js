import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  fromName: String,
  toName: String,
  amount: Number,
});

const TransactionModel = mongoose.model("Transaction", transactionSchema);

export default TransactionModel;
