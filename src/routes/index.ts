import express from "express";
const router = express.Router();

import { getBrandbyId } from "../controllers";

router.get("/getBrand", getBrandbyId);

export default router;
