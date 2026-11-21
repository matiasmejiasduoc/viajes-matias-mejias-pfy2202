import { useEffect, useState } from 'react'
import { countNights } from '../utils/format'
import { readStorage, writeStorage } from '../utils/storage'
import { TripContext } from './TripContext'

const STORAGE_KEY = 'viajes-plan'

const emptyTrip = { destino: null, vuelo: null, hotel: null, pasajeros: 1 }

const loadTrip = () => ({ ...emptyTrip, ...readStorage(STORAGE_KEY, {}) })

export function TripProvider({ children }) {
  const [trip, setTrip] = useState(loadTrip)

  useEffect(() => {
    writeStorage(STORAGE_KEY, trip)
  }, [trip])

  const withDestino = (current, destino) =>
    current.destino?.id === destino.id ? current : { ...emptyTrip, pasajeros: current.pasajeros, destino }

  const selectVuelo = (destino, vuelo) =>
    setTrip((current) => ({ ...withDestino(current, destino), vuelo }))

  const selectHotel = (destino, hotel) =>
    setTrip((current) => ({ ...withDestino(current, destino), hotel }))

  const removeVuelo = () => setTrip((current) => ({ ...current, vuelo: null }))
  const removeHotel = () => setTrip((current) => ({ ...current, hotel: null }))
  const setPasajeros = (pasajeros) => setTrip((current) => ({ ...current, pasajeros }))
  const clearTrip = () => setTrip((current) => ({ ...emptyTrip, pasajeros: current.pasajeros }))

  const noches = trip.vuelo ? countNights(trip.vuelo.salida, trip.vuelo.regreso) : 0
  const totalVuelo = trip.vuelo ? trip.vuelo.precio * trip.pasajeros : 0
  const totalHotel = trip.hotel ? trip.hotel.precioNoche * noches : 0
  const itemCount = (trip.vuelo ? 1 : 0) + (trip.hotel ? 1 : 0)

  const value = {
    ...trip,
    noches,
    totalVuelo,
    totalHotel,
    total: totalVuelo + totalHotel,
    itemCount,
    selectVuelo,
    selectHotel,
    removeVuelo,
    removeHotel,
    setPasajeros,
    clearTrip,
  }

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>
}
