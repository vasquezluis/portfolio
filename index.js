import express from "express";
import morgan from "morgan";

import { PORT } from "./server/config.js";
import indexRouter from "./server/routes/index.routes.js";
import portfolioRouter from "./server/routes/portfolio.routes.js";

const app = express();

app.use(morgan('dev'))

app.use(indexRouter);
app.use(portfolioRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
