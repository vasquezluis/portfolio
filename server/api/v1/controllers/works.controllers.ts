import { Request, Response } from "express";
import { response } from "../../../common/response";
import createHttpError from "http-errors";
import {
  createWork,
  deleteWork,
  getWork,
  getWorkByName,
  getWorks,
  updateWork,
} from "../services/works.services";

export const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result: any = await getWork(id);

    if (!result) {
      return response.error(
        res,
        new createHttpError.NotFound(`Work ${id} not found`)
      );
    }

    response.success(res, 200, `Work ${id}`, result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const getItemByQueryName = async (req: Request, res: Response) => {
  try {
    const name: any = req.query.name;
    console.log(name);

    const result: any = await getWorkByName(name);

    if (!result) {
      return response.error(
        res,
        new createHttpError.NotFound(`Work ${name} not found`)
      );
    }

    response.success(res, 200, `Work ${name}`, result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const result = await getWorks();

    response.success(res, 200, "List of works", result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const work = req.body;

    const result = await createWork(work);

    response.success(res, 201, "Work created!", result);
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

    const result = await updateWork(id, body);

    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound(`Work ${id} not found!`)
      );
    } else {
      response.success(res, 201, "Work updated!", result);
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

    const result = await deleteWork(id);
    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound(`Work ${id} not found!`)
      );
    } else {
      response.success(res, 201, "Work deleted!", result);
    }
  } catch (error) {
    return response.error(res, error);
  }
};
