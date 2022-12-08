import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: 'API menu',
    menu: {
      works: `http://${req.headers.host}/api/v1/works`,
      projects: `http://${req.headers.host}/api/v1/projects`,
      testimonials: `http://${req.headers.host}/api/v1/testimonials`
    }
  })
});

export default router;
