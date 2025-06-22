import { createConnection } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbConnect.connect((err) => {
  if (err) console.error("❌ Database connection failed:", err);
  else console.log("✅ Connected to database");
});

const db = dbConnect.promise();

export default db;
