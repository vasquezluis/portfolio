import express from "express";
import morgan from "morgan";

import indexRouter from "./v1/routes/index.routes.js";
import portfolioRouter from "./v1/routes/portfolio.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRouter);
app.use(portfolioRouter);

export default app;
