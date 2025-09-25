





export abstract class StockRepository {

  abstract create( createBatchTmpDTO: CreateBatchTmpDTO ): Promise<BatchEntity>;

  abstract getAll(): Promise<ArticleEntity[]>;
  
  abstract findByID( id:number ): Promise<ArticleEntity>;
  
  // abstract updateByID( updateArticleDTO:UpdateArticleDTO ): Promise<ArticleEntity>;
  
  // abstract deleteByID( id:number ): Promise<ArticleEntity>;

  // abstract getArticlesFilterGeneric( 
  //   dto: FilterArticleDTO, wFilter: FilterArticleDTO, page: PaginationDTO
  // ): Promise<any>;
  
  // abstract getTireSearchGeneric( dto: FilterTireDTO ): Promise<any>;  
}


