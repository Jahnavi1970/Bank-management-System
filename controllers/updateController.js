import { CustomerModel } from "../Models/customerModels.js";
import TransactionModel from "../Models/transactionModels.js";

export const update = async (req, res) => {
  try {
    //console.log(req);
    const toCustomer = await CustomerModel.findOne({ userId: req.params.toId });

    const fromCustomer = await CustomerModel.findOne({
      userId: req.params.fromId,
    });
    if (toCustomer && fromCustomer) {
      if (fromCustomer.balance < req.body.amount) {
        return res.status(404).json({ message: "Insufficient Balance" });
      }
      const toCustomerBalance = toCustomer.balance + req.body.amount;
      const fromCustomerBalance = fromCustomer.balance - req.body.amount;
      await CustomerModel.findOneAndUpdate(
        { userId: req.params.toId },
        { balance: toCustomerBalance }
      );
      await CustomerModel.findOneAndUpdate(
        { userId: req.params.fromId },
        { balance: fromCustomerBalance }
      );
      TransactionModel.create({
        fromName: fromCustomer.name,
        toName: toCustomer.name,
        amount: req.body.amount,
      });
      return res
        .status(200)
        .json({ message: "Money Transferred Successfully!" });
    } else {
      return res.status(404).json({ message: "UserId not correct" });
    }
  } catch {
    return res.status(500).json({ message: "Error Occured" });
  }
};
