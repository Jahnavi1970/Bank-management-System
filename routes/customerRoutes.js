import express from "express";
import { getCustomer } from "../controllers/customerController.js";

const router = express.Router();
router.get("/", getCustomer);

export default router;
