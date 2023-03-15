import ProjectModel from "../models/projects.model";
import { Projects } from "../interfaces/projects.interface";

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
    const response = await ProjectModel.create(project);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
