





export class CreateBatchTmpDTO {

  private constructor(
    public empresa         : number,
    public sucursal        : number,
    public articulo        : number,
    public cantidad        : number,
    public descripcion     : string,
    public tipo            : string, // TipoMovimiento
    public comentario      : string,
    public codOperacion    : number,
    public precioUnitario? : number,
  ) {}

  static create( object: {[key: string]: any} ): [ string?, CreateBatchTmpDTO? ] {

    const { empresa, sucursal, articulo, cantidad, descripcion, tipo, comentario, codOperacion, precioUnitario } = object;

    if ( !empresa ) return [ 'empresa es requerido' ];
    if ( !sucursal ) return [ 'sucursal es requerido' ];
    if ( !articulo ) return [ `${descripcion}: El articulo es requerido` ];
    if ( cantidad < 0 || !Number.isInteger(cantidad) ) return [ `${descripcion}: La cantidad debe ser un numero entero positivo.` ];
    // if ( !Number.isFinite(cantidad) ) return [ 'No debe ser un valor NaN o Infinity' ];

    return [ undefined, new CreateBatchTmpDTO( empresa, 
                                               sucursal, 
                                               articulo, 
                                               cantidad, descripcion, tipo, comentario, codOperacion, precioUnitario )];
  }
}


