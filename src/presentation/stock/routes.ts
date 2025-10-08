import { Router } from "express";
import multer from "multer";
import { StockController } from "./controller";
import { StockDatasourceImpl, StockRepositoryImpl } from "../../infrastructure";






export class StockRoutes {

  static get routes(): Router {

    const router = Router();

    const storage = multer.memoryStorage();
    const upload = multer({ storage: storage });

    const datasource = new StockDatasourceImpl(); // origin data DB
		const repository = new StockRepositoryImpl( datasource ); // howto-use
		// const service = new StockService(); // service matriz

		const controller = new StockController( repository );

    // Define your routes here
    router.post('/upload-batch', upload.single('file'), controller.uploadBatch )
    router.post('/confirm-batch', controller.confirmBatch )

    return router;
  }
}


