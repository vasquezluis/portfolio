import { pool } from "../utils/db.js";

export const getWorks = async (req, res) => {

  try {
    const result = await pool.query("SELECT * FROM portfolio");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
