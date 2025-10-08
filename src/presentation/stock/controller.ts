import { BatchStockTmp, CreateBatchTmpDTO, StockRepository } from "../../domain"
import { Request, Response } from "express";
import * as xlsx from 'xlsx';
import path from "path";






export class StockController {

  constructor( 
    private readonly repository: StockRepository 
  ) {}

  uploadBatch = async ( req: Request, res: Response ) => {

    if ( !req.file ) return res.status(400).json({ message: 'No file uploaded' });

    const fileBuffer = req.file.buffer;

    const fileExtension = path.extname( req.file.originalname ).toLowerCase();
    if ( fileExtension !== '.xlsx' && fileExtension !== '.xls' ) {
      return res.status(400).json({ message: 'Formato no soportado. Por favor subir .xlsx o .xls.' });
    }

    const workbook = xlsx.read( fileBuffer, { type: 'buffer' } );
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData: any[] = xlsx.utils.sheet_to_json( worksheet, );

    if ( jsonData.length === 0 ) return res.status(400).json({ message: 'El archivo está vacío.' });

    const requiredKeys = [ 'articulo', 'cantidad', ];
    const missingKeys = requiredKeys.filter( key => !Object.keys(jsonData[0]).includes(key) );
    if ( missingKeys.length > 0 ) return res.status(400).json({ message: `Faltan columnas requeridas: ${missingKeys.join(', ')}` });

    console.log( jsonData );
    const mappedResults = jsonData.map( CreateBatchTmpDTO.create );

    const errors: string[] = mappedResults
                              .filter( ([ error, dto ]) => error !== undefined )
                              .map( ([ error, dto ]) => error! );

    const validDTOs = mappedResults
                       .filter( ([ error, dto ]) => dto !== undefined )
                       .map( ([ error, dto ]) => dto as CreateBatchTmpDTO );

    // {
    //   "message": "Archivo validado y en espera de confirmación.",
    //   "transactionId": "asdf-1234-qwer-5678",
    //   "dataSummary": {
    //     "totalRecords": 500,
    //     "validRecords": 480,
    //     "errorRecords": 20
    //   }
    // }

    new BatchStockTmp( this.repository )
      .execute( validDTOs, errors )
      .then( tx => res.status(200).json( tx ))
      .catch( error => this.handleError( error, res ));
  }

  confirmBatch = async ( req: Request, res: Response ) => {
    // Implementation here
    throw new Error("Method not implemented.");
  } 

  private handleError = ( error: unknown, res: Response ) => {

    if( error instanceof Error ) {
      return res.json({ error: error.message });
    }

    console.log( `${error}` );
    return res.status(500).json({ error: 'Internal server error' });
  }
}


