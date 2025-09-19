SELECT
  s.empresa,
  s.sucursal,
  s.articulo,
  (
    s.cantidad - COALESCE(r.reservas_pendientes, (0) :: bigint)
  ) AS saldo_disponible
FROM
  (
    stocks s
    LEFT JOIN (
      SELECT
        reservas.empresa,
        reservas.sucursal,
        reservas.articulo,
        sum(reservas.cantidad) AS reservas_pendientes
      FROM
        reservas
      WHERE
        (reservas.estado = 'PENDIENTE' :: "EstadosReserva")
      GROUP BY
        reservas.empresa,
        reservas.sucursal,
        reservas.articulo
    ) r ON (
      (
        (s.empresa = r.empresa)
        AND (s.sucursal = r.sucursal)
        AND (s.articulo = r.articulo)
      )
    )
  );