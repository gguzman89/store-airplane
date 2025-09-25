import { StockRepository } from "../../domain"






export class StockController {

  constructor( 
    private readonly repository: StockRepository 
  ) {}

  uploadBatch = async ( req: Request, res: Response ) => {
    // Implementation here
    throw new Error("Method not implemented.");
  }

  confirmBatch = async ( req: Request, res: Response ) => {
    // Implementation here
    throw new Error("Method not implemented.");
  } 
}


