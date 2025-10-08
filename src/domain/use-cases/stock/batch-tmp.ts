import { CreateBatchTmpDTO } from "../../dtos/create-batch-tmp.dto";
import { BatchMovTmpEntity } from "../../entities/batch.mov-tmp.entity";
import { StockRepository } from "../../repositories/stock.repository";



interface BatchStockTmpUseCase {

  execute( dtos: CreateBatchTmpDTO[], errors: string[] ): Promise<BatchMovTmpEntity>;
}



export class BatchStockTmp implements BatchStockTmpUseCase {
  
  constructor(
    private readonly repository: StockRepository
  ) {}

  execute( dtos: CreateBatchTmpDTO[], errors: string[] ): Promise<BatchMovTmpEntity> {

    return this.repository.createStockTemporary( dtos, errors );
  }
  
}


