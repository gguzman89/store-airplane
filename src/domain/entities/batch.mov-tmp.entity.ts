





export class BatchMovTmpEntity {

  /**
   * public orden:                  	number,
      public idArticulo:             	number,
      public nombre?:                 string,
   */

      /**
       *  
       * {
    //    "message": "Archivo validado y en espera de confirmación.",
    //    "transactionId": "asdf-1234-qwer-5678",
    //    "dataSummary": {
    //     "totalRecords": 500,
    //     "validRecords": 480,
    //     "errorRecords": 20
        //   }
        // }
       */
  constructor(
    public id:            number,
    public message:       string,
    public transactionId: number,
    public dataSummary:   {[key: string]: any},
    // public validDtos:   {[key: string]: any},
    // public errors:   string[],
  ) {}

  public static fromObject( object: {[key: string]: any} ): BatchMovTmpEntity {

    const { id, message, transactionId, dataSummary, validDtos, errors } = object;

    const msgDefault = message ?? 'Carga en revisión y pendiente de confirmación final.'; 
    const dataDefault = dataSummary ?? { totalRecords: 0, validRecords: 0, errorRecords: [] };

    return new BatchMovTmpEntity( id, msgDefault, transactionId, dataDefault );
  }
}
