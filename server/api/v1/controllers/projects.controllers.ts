import { Request, Response } from "express";
import { response } from "../../../common/response";
import createHttpError from "http-errors";

import {
  getProjects,
  createProject,
  getProject,
  getProjectByName,
  updateProject,
  deleteProject,
} from "../services/projects.services";

export const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result: any = await getProject(id);

    if (!result) {
      return response.error(
        res,
        new createHttpError.NotFound(`Project ${id} not found`)
      );
    }

    response.success(res, 200, `Project ${id}`, result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const getItemByQueryName = async (req: Request, res: Response) => {
  try {
    const name: any = req.query.name;

    const result: any = await getProjectByName(name);

    if (!result) {
      return response.error(
        res,
        new createHttpError.NotFound(`Project ${name} not found`)
      );
    }

    response.success(res, 200, `Project ${name}`, result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

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

export const updateItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;
    const { body } = req;

    const result = await updateProject(id, body);

    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound(`Project ${id} not found!`)
      );
    } else {
      response.success(res, 201, "Project updated!", result);
    }
  } catch (error) {
    return response.error(res, error);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await deleteProject(id);
    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound(`Project ${id} not found!`)
      );
    } else {
      response.success(res, 204, "Project deleted!", result);
    }
  } catch (error) {
    return response.error(res, error);
  }
};
