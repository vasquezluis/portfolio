import express from "express";
import morgan from "morgan";
import cors from "cors";

import indexRouter from "./api/v1/routes/index.routes";
import projectsRouter from "./api/v1/routes/projects.routes";
import worksRouter from "./api/v1/routes/works.routes";
import testimonialsRouter from "./api/v1/routes/testimonials.routes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(cors({ origin: "https://vasquezluis.netlify.app" }));

app.use(indexRouter);
app.use(projectsRouter);
app.use(worksRouter);
app.use(testimonialsRouter);

export default app;
