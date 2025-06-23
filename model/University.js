import db from "../config/DBCofig.js";

// Model/University.js
export const UniversityForm = {
  create: async (data) => {
    return await db.query(
      `INSERT INTO university_forms 
      (first_name, last_name, dob, mobile, email, city, university_name) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        data.firstName,
        data.lastName,
        data.dob,
        data.mobile,
        data.email,
        data.city,
        data.university_name,
      ]
    );
  },
};
