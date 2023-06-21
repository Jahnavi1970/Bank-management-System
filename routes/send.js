import express from "express";
import { update } from "../controllers/updateController.js";

const router = express.Router();

router.put("/:fromId/:toId", update);

export default router;
