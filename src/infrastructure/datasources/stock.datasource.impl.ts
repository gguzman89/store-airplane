import { postgres as stockMov } from "../../data";
import { BatchMovTmpEntity, CreateBatchTmpDTO, StockDatasource } from "../../domain";
import { v4 as uuidv4 } from 'uuid';
import { TipoMovimiento } from '../../../generated/prisma/index';







export class StockDatasourceImpl implements StockDatasource {

  constructor() {}

  async createStockTemporary( dtos: CreateBatchTmpDTO[], errors: string[] ): Promise<BatchMovTmpEntity> {

    /*** 
     * IdArticulo	Empresa	            Proveedor	Articulo	Descripcion	                Sugerido
              913	Guerrini Neumáticos	KUMHO	    11133	    195/65 R 15  KH25 - KUMHO	  1535
     * 
     */
    const transactionID = uuidv4(); 
    console.log({ transactionID, dtos, errors });

    // const rest = await stockMov.movimiento.create({
    //   data: {
    //     // transactionId: transactionID,
    //     empresa: dto.empresa , //{ connect: { id: dto.empresa } }, @relation(fields: [stockId], references: [id])
    //     sucursal: dto.sucursal, //{ connect: { id: dto.sucursal } },
    //     articulo: dto.articulo,
    //     cantidad: dto.cantidad,
    //     descripcion: dto.descripcion,
    //     comentario: dto.comentario,
    //     precioUnitario: dto.precioUnitario,
    //     tipo: TipoMovimiento.MERCADERIA_INGRESO,
    //   }
    // });

    const rest = await stockMov.movimiento.createMany({
      data: dtos.map( dto => ({
        // transactionId: transactionID,
        empresa: dto.empresa,
        sucursal: dto.sucursal,
        articulo: dto.articulo,
        cantidad: dto.cantidad,
        descripcion: dto.descripcion,
        comentario: dto.comentario,
        precioUnitario: dto.precioUnitario,
        tipo: TipoMovimiento.MERCADERIA_INGRESO,
      })),
      // skipDuplicates: true, // Optional: Skip duplicates if any
    });

    console.log( rest );
    let dataSummary = {
      totalRecords: dtos.length + errors.length,
      validRecords: dtos.length,
      errorRecords: errors
    }

    let message = 'Archivo validado y en espera de confirmación.';
    if ( errors.length > 0 ) message = 'Archivo con errores, revisar la lista de errores.';
    // if ( dtos.length === 0 ) message = 'No hay registros válidos para procesar.';
    if ( dtos.length === 0 && errors.length === 0 ) message = 'El archivo está vacío.';
    

    return BatchMovTmpEntity.fromObject({ dataSummary, dtos, errors, message });
    /**
     * return {
      // page: page.skip,
      take: dto.take,
      total: total.length,
      // results: articles.length,
      articles: articles.map( article => {
      
        const { orden,
                BsAs,
                Garay,
                Garay2,
                Belgrano,
                NeuquenShop,
                Neuquen, 
           ...articleEntity } = ArticleEntity.fromObject( article );
        return articleEntity;
    })}
     */
  }

  // create(createBatchTmpDTO: CreateBatchTmpDTO): Promise<BatchEntity> {
  //   throw new Error("Method not implemented.");
  // }
  // getAll(): Promise<ArticleEntity[]> {
  //   throw new Error("Method not implemented.");
  // }
  // findByID(id: number): Promise<ArticleEntity> {
  //   throw new Error("Method not implemented.");
  // }


}


