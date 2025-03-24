-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

SELECT  materiales.descripcion, fecha,SUM(cantidad) as sumaCantidades, SUM(cantidad * materiales.precio) as costoTotal
FROM entregan, materiales
WHERE fecha BETWEEN '1997-01-01' AND '1997-12-31'
AND entregan.clave = materiales.clave
GROUP BY entregan.clave;

--  Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT proveedores.razonsocial, COUNT(*) as numeroEntregas, SUM(cantidad * materiales.precio) as costoTotal
FROM proveedores, entregan, materiales
WHERE entregan.clave = materiales.clave
AND proveedores.rfc = entregan.rfc
GROUP BY proveedores.razonsocial;

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT materiales.clave, materiales.descripcion, SUM(entregan.cantidad), MIN(entregan.cantidad), MAX(entregan.cantidad), SUM(entregan.cantidad * materiales.precio)
FROM materiales, entregan
WHERE materiales.clave = entregan.clave
GROUP BY materiales.clave;

-- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

SELECT proveedores.razonsocial, materiales.descripcion, materiales.clave, AVG(entregan.cantidad) as promedioEntregado
FROM proveedores, entregan, materiales
WHERE proveedores.rfc = entregan.rfc
GROUP BY materiales.descripcion
HAVING AVG(entregan.cantidad) > 500;

-- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.

SELECT proveedores.razonsocial, materiales.descripcion, materiales.clave, AVG(entregan.cantidad) as promedioEntregado
FROM proveedores, entregan, materiales
WHERE proveedores.rfc = entregan.rfc
GROUP BY materiales.descripcion
HAVING AVG(entregan.cantidad) < 370
AND AVG(entregan.cantidad) > 450;

-- Clave y descripción de los materiales que nunca han sido entregados.

SELECT materiales.clave, materiales.descripcion
FROM materiales 
WHERE materiales.clave NOT IN (SELECT materiales.clave
                                 FROM materiales, entregan
                       WHERE materiales.clave = entregan.clave)

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT proveedores.razonsocial
FROM proveedores, entregan, proyectos
WHERE proveedores.rfc = entregan.rfc
AND entregan.numero = proyectos.numero
AND proyectos.denominacion = 'CIT Yucatán'
IN (SELECT proveedores.razonsocial
FROM proveedores, entregan, proyectos
WHERE proveedores.rfc = entregan.rfc
AND entregan.numero = proyectos.numero
AND proyectos.denominacion = 'VAGO780801')
GROUP BY proveedores.razonsocial;

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT materiales.descripcion
FROM materiales
WHERE materiales.clave NOT IN (SELECT entregan.clave
                              FROM entregan, proyectos
                              WHERE entregan.numero = proyectos.numero
                              AND proyectos.denominacion = 'CIT Yucatán')

-- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

SELECT proveedores.razonsocial, AVG(entregan.cantidad)
FROM proveedores, entregan
WHERE proveedores.rfc = entregan.rfc
GROUP BY proveedores.razonsocial
HAVING AVG(entregan.cantidad) > (SELECT AVG(entregan.cantidad)
                                FROM entregan
                                WHERE entregan.rfc = 'VAGO780901')
;

-- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
SELECT proveedores.rfc, proveedores.razonsocial
FROM proveedores, entregan, proyectos
WHERE proveedores.rfc = entregan.rfc
AND entregan.numero = proyectos.numero
AND proyectos.denominacion = 'Infonavit Durango'
AND entregan.fecha BETWEEN '2000-01-01' AND '2000-12-31'
HAVING SUM(entregan.cantidad) > (SELECT SUM(entregan.cantidad)
                                FROM entregan
                                WHERE entregan.fecha BETWEEN '2001-01-01' AND '2001-12-31')