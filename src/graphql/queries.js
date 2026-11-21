import { gql } from '@apollo/client'

export const OPCIONES_VIAJE = gql`
  query OpcionesViaje($destinoId: ID!) {
    vuelos(destinoId: $destinoId) {
      id
      aerolinea
      numero
      origen
      salida
      regreso
      horaSalida
      duracion
      escalas
      precio
      asientosDisponibles
      disponible
    }
    hoteles(destinoId: $destinoId) {
      id
      nombre
      estrellas
      zona
      precioNoche
      habitacionesDisponibles
      desayuno
      disponible
    }
  }
`
