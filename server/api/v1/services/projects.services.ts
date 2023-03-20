import ProjectModel from "../models/projects.model";
import { Projects } from "../interfaces/projects.interface";

export const getProject = async (id: string) => {
  try {
    const response = await ProjectModel.findById(id);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getProjectByName = async (name: string) => {
  try {
    const response = await ProjectModel.findOne({ title: name });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getProjects = async () => {
  try {
    const response = await ProjectModel.find({});

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createProject = async (project: Projects) => {
  try {
    let newProject = { ...project, active: true };

    const response = await ProjectModel.create(newProject);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateProject = async (id: string, body: any) => {
  try {
    const response = await ProjectModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteProject = async (id: string) => {
  try {
    const response = await ProjectModel.findByIdAndUpdate(
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
