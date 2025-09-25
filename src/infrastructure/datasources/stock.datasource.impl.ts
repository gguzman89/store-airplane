import { StockDatasource } from "../../domain";







export class StockDatasourceImpl implements StockDatasource {

  constructor() {}

  create(createBatchTmpDTO: CreateBatchTmpDTO): Promise<BatchEntity> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ArticleEntity[]> {
    throw new Error("Method not implemented.");
  }
  findByID(id: number): Promise<ArticleEntity> {
    throw new Error("Method not implemented.");
  }


}


