import { Router, Request, Response } from "express";
import { response } from "../../../common/response";

const router = Router();

router.get("/api/v1/", ({ headers: { host } }: Request, res: Response) => {
  const menu: { [key: string]: string } = {
    works: `http://${host}/api/v1/works`,
    projects: `http://${host}/api/v1/projects`,
    testimonials: `http://${host}/api/v1/testimonials`,
  };

  response.success(res, 200, "api menu", menu);
});

export default router;
