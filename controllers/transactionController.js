import TransactionModel from "../Models/transactionModels.js";

export const getTransactions = async (req, res) => {
  const transactionDetails = await TransactionModel.find();
  res.send(transactionDetails);
};
