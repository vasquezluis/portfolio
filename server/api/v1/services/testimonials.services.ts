import TestimonialModel from "../models/testimonials.model";
import { Testimonials } from "../interfaces/testimonials.interface";

export const getTestimonial = async (id: string) => {
  try {
    const response = await TestimonialModel.findById(id);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getTestimonials = async () => {
  try {
    const response = await TestimonialModel.find({});

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createTestimonial = async (testimonial: Testimonials) => {
  try {
    const response = await TestimonialModel.create(testimonial);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateTestimonial = async (id: string, body: any) => {
  try {
    const response = await TestimonialModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteTestimonial = async (id: string) => {
  try {
    const response = await TestimonialModel.findByIdAndUpdate(
      id,
      {
        active: false,
      },
      { new: true }
    );

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
