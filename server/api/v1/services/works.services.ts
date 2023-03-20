import WorkModel from "../models/works.model";
import { Works } from "../interfaces/works.interface";

export const getWork = async (id: string) => {
  try {
    const response = await WorkModel.findById(id);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getWorkByName = async (name: string) => {
  try {
    const response = await WorkModel.findOne({ title: name });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getWorks = async () => {
  try {
    const response = await WorkModel.find({});

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createWork = async (work: Works) => {
  try {
    let newWork = { ...work, active: true };

    const response = await WorkModel.create(newWork);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateWork = async (id: string, body: any) => {
  try {
    const response = await WorkModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteWork = async (id: string) => {
  try {
    const response = await WorkModel.findByIdAndUpdate(
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
