import { Router } from "express";
import { handleEnquiryForm } from "../controller/enquiry.controller.js";

const EnquiryRoute = Router();

EnquiryRoute.post("/submit-enquiry", handleEnquiryForm);

export default EnquiryRoute;
