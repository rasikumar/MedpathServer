import db from "../config/DBCofig.js";

export const EnquiryForm = {
  create: async (data) => {
    return await db.query(
      `INSERT INTO inquiry (name, email, mobile, country, message, dob)
     VALUES (?, ?, ?, ?, ?,?)`,
      [data.name, data.email, data.mobile, data.country, data.message, data.dob]
    );
  },
};
