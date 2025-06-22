import { Router } from "express";
import universityRouter from "./university.route.js";
import EnquiryRoute from "./inquiry.route.js";

const router = Router();
router.use("/university", universityRouter);
router.use("/inquiry", EnquiryRoute);
export default router;
