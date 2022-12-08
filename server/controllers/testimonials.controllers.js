import { pool } from "../utils/db.js";

export const getTestimony = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const [result] = await pool.query(
      "SELECT * FROM testimonials WHERE id = ?",
      [id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: `Testimony ${id} not found` });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTestimonials = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM testimonials");

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTestimonials = async (req, res) => {
  try {
    const data = req.body;
    const dataValues = Object.values(req.body);

    const [result] = await pool.query(
      "INSERT INTO testimonials VALUES (null, ?,?,?,?)",
      dataValues
    );

    res.json({
      id: result.insertId,
      data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTestimonials = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const [result] = await pool.query(
      "UPDATE testimonials SET ? WHERE id = ?",
      [body, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Testimony ${id} not found` });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTestimonials = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const [result] = await pool.query("DELETE FROM testimonials WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Testimony ${id} not found` });
    }

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
