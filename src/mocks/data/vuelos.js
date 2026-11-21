export const vuelos = [
  { id: 101, destinoId: 1, aerolinea: 'LATAM', numero: 'LA 441', origen: 'Santiago (SCL)', salida: '2026-12-12', regreso: '2026-12-17', horaSalida: '07:40', duracion: '2 h 05 min', escalas: 0, precio: 189900, asientosDisponibles: 14 },
  { id: 102, destinoId: 1, aerolinea: 'Sky Airline', numero: 'H2 520', origen: 'Santiago (SCL)', salida: '2027-01-08', regreso: '2027-01-14', horaSalida: '13:15', duracion: '2 h 10 min', escalas: 0, precio: 142500, asientosDisponibles: 6 },
  { id: 103, destinoId: 1, aerolinea: 'Aerolíneas Argentinas', numero: 'AR 1281', origen: 'Santiago (SCL)', salida: '2027-02-03', regreso: '2027-02-08', horaSalida: '18:50', duracion: '2 h 00 min', escalas: 0, precio: 165000, asientosDisponibles: 0 },

  { id: 201, destinoId: 2, aerolinea: 'LATAM', numero: 'LA 2367', origen: 'Santiago (SCL)', salida: '2026-12-05', regreso: '2026-12-11', horaSalida: '06:10', duracion: '5 h 35 min', escalas: 1, precio: 398000, asientosDisponibles: 9 },
  { id: 202, destinoId: 2, aerolinea: 'Sky Airline', numero: 'H2 1043', origen: 'Santiago (SCL)', salida: '2027-01-20', regreso: '2027-01-26', horaSalida: '10:30', duracion: '6 h 20 min', escalas: 1, precio: 329900, asientosDisponibles: 3 },

  { id: 301, destinoId: 3, aerolinea: 'LATAM', numero: 'LA 752', origen: 'Santiago (SCL)', salida: '2026-12-18', regreso: '2026-12-26', horaSalida: '09:05', duracion: '4 h 15 min', escalas: 0, precio: 412000, asientosDisponibles: 21 },
  { id: 302, destinoId: 3, aerolinea: 'GOL', numero: 'G3 7731', origen: 'Santiago (SCL)', salida: '2027-02-10', regreso: '2027-02-17', horaSalida: '15:40', duracion: '6 h 50 min', escalas: 1, precio: 356700, asientosDisponibles: 11 },
  { id: 303, destinoId: 3, aerolinea: 'Sky Airline', numero: 'H2 880', origen: 'Santiago (SCL)', salida: '2027-03-02', regreso: '2027-03-09', horaSalida: '07:20', duracion: '4 h 20 min', escalas: 0, precio: 298000, asientosDisponibles: 2 },

  { id: 401, destinoId: 4, aerolinea: 'LATAM', numero: 'LA 610', origen: 'Santiago (SCL)', salida: '2027-01-15', regreso: '2027-01-23', horaSalida: '23:55', duracion: '9 h 40 min', escalas: 1, precio: 689000, asientosDisponibles: 8 },
  { id: 402, destinoId: 4, aerolinea: 'Copa Airlines', numero: 'CM 178', origen: 'Santiago (SCL)', salida: '2027-02-20', regreso: '2027-02-28', horaSalida: '06:45', duracion: '10 h 05 min', escalas: 1, precio: 615500, asientosDisponibles: 0 },
  { id: 403, destinoId: 4, aerolinea: 'Aeroméxico', numero: 'AM 15', origen: 'Santiago (SCL)', salida: '2027-03-10', regreso: '2027-03-18', horaSalida: '01:30', duracion: '11 h 20 min', escalas: 1, precio: 579900, asientosDisponibles: 17 },

  { id: 501, destinoId: 5, aerolinea: 'LATAM', numero: 'LA 532', origen: 'Santiago (SCL)', salida: '2027-04-08', regreso: '2027-04-16', horaSalida: '22:10', duracion: '10 h 50 min', escalas: 0, precio: 899000, asientosDisponibles: 12 },
  { id: 502, destinoId: 5, aerolinea: 'American Airlines', numero: 'AA 940', origen: 'Santiago (SCL)', salida: '2027-05-03', regreso: '2027-05-11', horaSalida: '21:25', duracion: '13 h 30 min', escalas: 1, precio: 812300, asientosDisponibles: 5 },

  { id: 601, destinoId: 6, aerolinea: 'Iberia', numero: 'IB 6830', origen: 'Santiago (SCL)', salida: '2027-03-14', regreso: '2027-03-28', horaSalida: '12:35', duracion: '12 h 55 min', escalas: 0, precio: 1049000, asientosDisponibles: 19 },
  { id: 602, destinoId: 6, aerolinea: 'LATAM', numero: 'LA 704', origen: 'Santiago (SCL)', salida: '2027-04-20', regreso: '2027-05-02', horaSalida: '13:50', duracion: '13 h 05 min', escalas: 0, precio: 1125000, asientosDisponibles: 7 },
  { id: 603, destinoId: 6, aerolinea: 'Air Europa', numero: 'UX 46', origen: 'Santiago (SCL)', salida: '2027-05-11', regreso: '2027-05-22', horaSalida: '15:00', duracion: '15 h 40 min', escalas: 1, precio: 968000, asientosDisponibles: 4 },

  { id: 701, destinoId: 7, aerolinea: 'ITA Airways', numero: 'AZ 681', origen: 'Santiago (SCL)', salida: '2027-04-12', regreso: '2027-04-24', horaSalida: '11:20', duracion: '16 h 10 min', escalas: 1, precio: 1189000, asientosDisponibles: 10 },
  { id: 702, destinoId: 7, aerolinea: 'Air France', numero: 'AF 401', origen: 'Santiago (SCL)', salida: '2027-09-15', regreso: '2027-09-27', horaSalida: '14:05', duracion: '17 h 25 min', escalas: 1, precio: 1095500, asientosDisponibles: 0 },

  { id: 801, destinoId: 8, aerolinea: 'Qatar Airways', numero: 'QR 774', origen: 'Santiago (SCL)', salida: '2027-03-25', regreso: '2027-04-08', horaSalida: '05:50', duracion: '29 h 40 min', escalas: 1, precio: 1690000, asientosDisponibles: 6 },
  { id: 802, destinoId: 8, aerolinea: 'Delta', numero: 'DL 146', origen: 'Santiago (SCL)', salida: '2027-10-14', regreso: '2027-10-28', horaSalida: '20:15', duracion: '27 h 15 min', escalas: 1, precio: 1549000, asientosDisponibles: 13 },
]
