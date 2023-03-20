import { Request, Response } from "express";
import { response } from "../../../common/response";
import createHttpError from "http-errors";
import {
  createTestimonial,
  deleteTestimonial,
  getTestimonial,
  getTestimonials,
  updateTestimonial,
} from "../services/testimonials.services";

export const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result: any = await getTestimonial(id);

    if (!result) {
      return response.error(
        res,
        new createHttpError.NotFound(`Testimonial ${id} not found`)
      );
    }

    response.success(res, 200, `Testimonial ${id}`, result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const result = await getTestimonials();

    response.success(res, 200, "List of testimonials", result);
  } catch (error) {
    if (error instanceof Error) {
      return response.error(res, error);
    }
  }
};

export const createItem = async (req: Request, res: Response) => {
  try {
    const testimonial = req.body;

    const result = await createTestimonial(testimonial);

    response.success(res, 201, "Testimonial created!", result);
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

    const result = await updateTestimonial(id, body);

    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound(`Testimonial ${id} not found!`)
      );
    } else {
      response.success(res, 201, "Testimonial updated!", result);
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

    const result = await deleteTestimonial(id);
    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound(`Testimonial ${id} not found!`)
      );
    } else {
      response.success(res, 204, "Testimonial deleted!", result);
    }
  } catch (error) {
    return response.error(res, error);
  }
};
