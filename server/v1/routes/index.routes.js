import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: 'API menu',
    menu: {
      portfolio: `http://${req.headers.host}/api/v1/works`
    }
  })
});

export default router;
