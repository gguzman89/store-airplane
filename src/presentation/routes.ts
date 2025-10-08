import { Router } from "express";
import { StockRoutes } from "./stock/routes";






export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    // Define your routes here
    router.get('/health', (req, res) => {
      res.status(200).json({ status: 'OK check' });
    });

    router.use('/api/stocks', StockRoutes.routes);

    return router;
  }
}


