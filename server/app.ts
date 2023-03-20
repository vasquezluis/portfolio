import express from "express";
import morgan from "morgan";
import cors from "cors";

import indexRouter from "./api/v1/routes/index.routes";
import projectsRouter from "./api/v1/routes/projects.routes";
import worksRouter from "./api/v1/routes/works.routes";
// import testimonialsRouter from "./v1/routes/testimonials.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use(indexRouter);
app.use(projectsRouter);
app.use(worksRouter);
// app.use(testimonialsRouter);

export default app;
