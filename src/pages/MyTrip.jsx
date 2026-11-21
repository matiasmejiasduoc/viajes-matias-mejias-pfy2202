import { useState } from 'react'
import { Link } from 'react-router-dom'
import EmptyState from '../components/EmptyState'
import PageHeader from '../components/PageHeader'
import Stars from '../components/Stars'
import TripSummary from '../components/TripSummary'
import { useTrip } from '../context/useTrip'
import { formatDate, formatPrice, stopsLabel } from '../utils/format'

const MAX_PASAJEROS = 6

export default function MyTrip() {
  const trip = useTrip()
  const [confirmation, setConfirmation] = useState(null)

  const maxPasajeros = trip.vuelo ? Math.min(MAX_PASAJEROS, trip.vuelo.asientosDisponibles) : MAX_PASAJEROS

  const confirmTrip = () => {
    setConfirmation({
      codigo: `VM-${Date.now().toString().slice(-6)}`,
      ciudad: trip.destino.ciudad,
      total: trip.total,
    })
    trip.clearTrip()
  }

  if (confirmation) {
    return (
      <div className="card mx-auto max-w-lg p-6 text-center">
        <h1 className="text-xl font-bold text-gray-900">¡Reserva registrada!</h1>
        <p className="mt-2 text-gray-600">
          Tu viaje a {confirmation.ciudad} por {formatPrice(confirmation.total)} quedó registrado con el código{' '}
          <span className="font-semibold">{confirmation.codigo}</span>.
        </p>
        <Link to="/destinos" className="btn btn-primary mt-5">
          Seguir explorando
        </Link>
      </div>
    )
  }

  if (!trip.destino) {
    return (
      <>
        <PageHeader title="Mi viaje" />
        <EmptyState title="Todavía no armas tu viaje.">
          <p className="mb-3">Elige un destino y selecciona un vuelo y un hotel.</p>
          <Link to="/destinos" className="btn btn-primary">
            Ver destinos
          </Link>
        </EmptyState>
      </>
    )
  }

  return (
    <>
      <PageHeader title="Mi viaje" subtitle={`${trip.destino.ciudad}, ${trip.destino.pais}`}>
        <Link to={`/destinos/${trip.destino.id}`} className="btn btn-secondary">
          Cambiar opciones
        </Link>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <section className="card p-4">
            <label htmlFor="pasajeros" className="label">
              Pasajeros
            </label>
            <select
              id="pasajeros"
              className="input sm:w-40"
              value={trip.pasajeros}
              onChange={(event) => trip.setPasajeros(Number(event.target.value))}
            >
              {Array.from({ length: maxPasajeros }, (_, index) => index + 1).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </section>

          <section className="card p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Vuelo</h2>
              {trip.vuelo && (
                <button type="button" className="text-sm text-red-600 hover:underline" onClick={trip.removeVuelo}>
                  Quitar
                </button>
              )}
            </div>
            {trip.vuelo ? (
              <div className="mt-2 text-sm text-gray-600">
                <p className="font-medium text-gray-800">
                  {trip.vuelo.aerolinea} · {trip.vuelo.numero}
                </p>
                <p>
                  {trip.vuelo.origen} → {trip.destino.ciudad}
                </p>
                <p>
                  Ida {formatDate(trip.vuelo.salida)} a las {trip.vuelo.horaSalida} · Vuelta {formatDate(trip.vuelo.regreso)}
                </p>
                <p>
                  {trip.vuelo.duracion} · {stopsLabel(trip.vuelo.escalas)} · {formatPrice(trip.vuelo.precio)} por persona
                </p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-gray-400">No has elegido vuelo.</p>
            )}
          </section>

          <section className="card p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-900">Hotel</h2>
              {trip.hotel && (
                <button type="button" className="text-sm text-red-600 hover:underline" onClick={trip.removeHotel}>
                  Quitar
                </button>
              )}
            </div>
            {trip.hotel ? (
              <div className="mt-2 text-sm text-gray-600">
                <p className="font-medium text-gray-800">{trip.hotel.nombre}</p>
                <Stars count={trip.hotel.estrellas} />
                <p>
                  {trip.hotel.zona} · Desayuno {trip.hotel.desayuno ? 'incluido' : 'no incluido'}
                </p>
                <p>{formatPrice(trip.hotel.precioNoche)} por noche</p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-gray-400">No has elegido hotel.</p>
            )}
          </section>

          <button type="button" className="btn btn-secondary" onClick={trip.clearTrip}>
            Vaciar viaje
          </button>
        </div>

        <div className="space-y-3 lg:sticky lg:top-4 lg:self-start">
          <TripSummary showLink={false} />
          <button
            type="button"
            className="btn btn-primary w-full"
            disabled={!trip.vuelo || !trip.hotel}
            onClick={confirmTrip}
          >
            Confirmar reserva
          </button>
          {(!trip.vuelo || !trip.hotel) && (
            <p className="text-xs text-gray-500">Para confirmar necesitas elegir un vuelo y un hotel.</p>
          )}
        </div>
      </div>
    </>
  )
}
