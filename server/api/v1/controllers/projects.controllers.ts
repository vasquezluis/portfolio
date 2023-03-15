import { Request, Response } from "express";
import { response } from "../../../common/response";
import createHttpError from "http-errors";

import { getProjects, createProject } from "../services/projects.services";

// export const getItem = async (req: Request, res: Response) => {
//   try {
//     const {
//       params: { id },
//     } = req;

//     const [result] = await pool.query(
//       "SELECT * FROM personal_projects WHERE id = ? DESC",
//       [id]
//     );

//     if (result.length === 0) {
//       return res.status(404).json({ message: `Project ${id} not found` });
//     }

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const getItems = async (req: Request, res: Response) => {
  try {
    const result = await getProjects();

    response.success(res, 200, "List of projects", result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const project = req.body;

    const result = await createProject(project);

    response.success(res, 201, "Project created!", result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

// export const updateProjects = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;
//     const { body } = req;

//     const [result] = await pool.query("UPDATE personal_projects SET ? WHERE id = ?", [
//       body,
//       id,
//     ]);

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: `Project ${id} not found` });
//     }

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteProjects = async (req, res) => {
//   try {
//     const {
//       params: { id },
//     } = req;

//     const [result] = await pool.query("DELETE FROM personal_projects WHERE id = ?", [
//       id,
//     ]);

//     if (result.affectedRows === 0) {
//       return res.status(404).json({ message: `Project ${id} not found` });
//     }

//     return res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
