import { BatchMovTmpEntity, CreateBatchTmpDTO, StockDatasource, StockRepository } from "../../domain";







export class StockRepositoryImpl implements StockRepository {

  constructor(
    private readonly datasource: StockDatasource
  ) {}

  createStockTemporary( dtos: CreateBatchTmpDTO[], errors: string[] ): Promise<BatchMovTmpEntity> {
    
    return this.datasource.createStockTemporary( dtos, errors );
  }

  // create(createBatchTmpDTO: CreateBatchTmpDTO): Promise<BatchEntity> {

  //   return this.datasource.create( createBatchTmpDTO );
  // }
  // getAll(): Promise<ArticleEntity[]> {
    
  //   return this.datasource.getAll();
  // }
  // findByID(id: number): Promise<ArticleEntity> {
    
  //   return this.datasource.findByID( id );
  // }
  
}


