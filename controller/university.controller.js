import { UniversityForm } from "../Model/University.js";

export const handleUniversityForm = async (req, res) => {
  const formData = req.body;
  try {
    await UniversityForm.create(formData);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit form" });
  }
};
