import { useContext } from 'react'
import { TripContext } from './TripContext'

export function useTrip() {
  const context = useContext(TripContext)
  if (!context) throw new Error('useTrip debe usarse dentro de TripProvider')
  return context
}
