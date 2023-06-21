import { CustomerModel } from "../Models/customerModels.js";

export const getCustomer = async (req, res) => {
  const customerDetails = await CustomerModel.find();
  res.send(customerDetails);
};
