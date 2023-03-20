import { Schema, model } from "mongoose";
import { Works } from "../interfaces/works.interface";

// * accreditation schema based on accreditation interface

const WorksSchema = new Schema<Works>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link_1: {
      url: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
    link_2: {
      url: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
    tech_1: {
      name: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
    tech_2: {
      name: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
    tech_3: {
      name: {
        type: String,
      },
      icon: {
        type: String,
      },
    },
    type: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

//* model creation
const WorkModel = model("works", WorksSchema);
export default WorkModel;
