import express from "express";
import morgan from "morgan";

import indexRouter from "./v1/routes/index.routes.js";
import worksRouter from "./v1/routes/works.routes.js";
import projectsRouter from "./v1/routes/projects.routes.js";
import testimonialsRouter from "./v1/routes/testimonials.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRouter);
app.use(worksRouter);
app.use(projectsRouter);
app.use(testimonialsRouter);

export default app;
