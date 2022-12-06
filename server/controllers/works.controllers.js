import { pool } from "../utils/db.js";

export const getWork = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const [result] = await pool.query("SELECT * FROM works WHERE id = ?", [
      id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: `Work ${id} not found` });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWorks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM works");

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createWorks = async (req, res) => {
  try {
    const data = req.body;
    const dataValues = Object.values(req.body);

    const [result] = await pool.query(
      "INSERT INTO works VALUES (null, ?,?,?,?,?,?,?,?)",
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

export const updateWorks = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const [result] = await pool.query("UPDATE works SET ? WHERE id = ?", [
      body,
      id,
    ]);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWorks = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const [result] = await pool.query("DELETE FROM works WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Work ${id} not found` });
    }

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
