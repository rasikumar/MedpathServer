import { Router } from "express";
import { handleUniversityForm } from "../Controller/university.controller.js";

const universityRouter = Router();

universityRouter.post("/submit-university", handleUniversityForm);

export default universityRouter;
