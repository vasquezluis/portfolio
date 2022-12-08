import { pool } from "../utils/db.js";

export const getProject = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const [result] = await pool.query(
      "SELECT * FROM personal_projects WHERE id = ? DESC",
      [id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: `Project ${id} not found` });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM personal_projects");

    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProjects = async (req, res) => {
  try {
    const data = req.body;
    const dataValues = Object.values(req.body);

    const [result] = await pool.query(
      "INSERT INTO personal_projects VALUES (null, ?,?,?,?,?,?,?,?,?)",
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

export const updateProjects = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const [result] = await pool.query("UPDATE personal_projects SET ? WHERE id = ?", [
      body,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Project ${id} not found` });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProjects = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const [result] = await pool.query("DELETE FROM personal_projects WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: `Project ${id} not found` });
    }

    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
