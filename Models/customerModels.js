import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  userId: String,
  name: String,
  emailId: String,
  balance: {
    type: Number,
    default: 0,
  },
});

export const CustomerModel = mongoose.model("Customer", customerSchema);
