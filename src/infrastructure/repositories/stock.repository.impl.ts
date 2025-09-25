import { StockDatasource, StockRepository } from "../../domain";







export class StockRepositoryImpl implements StockRepository {

  constructor(
    private readonly datasource: StockDatasource
  ) {}

  create(createBatchTmpDTO: CreateBatchTmpDTO): Promise<BatchEntity> {

    return this.datasource.create( createBatchTmpDTO );
  }
  getAll(): Promise<ArticleEntity[]> {
    
    return this.datasource.getAll();
  }
  findByID(id: number): Promise<ArticleEntity> {
    
    return this.datasource.findByID( id );
  }
  
}


