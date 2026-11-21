import { Link } from 'react-router-dom'
import { useTrip } from '../context/useTrip'
import { formatDate, formatPrice } from '../utils/format'

export default function TripSummary({ showLink = true }) {
  const { destino, vuelo, hotel, pasajeros, noches, totalVuelo, totalHotel, total } = useTrip()

  if (!destino) {
    return (
      <aside className="card p-4 text-sm text-gray-500">
        <h2 className="mb-2 text-base font-semibold text-gray-900">Tu viaje</h2>
        Aún no eliges vuelo ni hotel.
      </aside>
    )
  }

  return (
    <aside className="card p-4 text-sm">
      <h2 className="text-base font-semibold text-gray-900">Tu viaje a {destino.ciudad}</h2>
      <p className="text-gray-500">{destino.pais}</p>

      <div className="mt-3 space-y-3 border-t border-gray-100 pt-3">
        <div>
          <p className="font-medium text-gray-700">Vuelo</p>
          {vuelo ? (
            <p className="text-gray-600">
              {vuelo.aerolinea} · {formatDate(vuelo.salida)} al {formatDate(vuelo.regreso)}
            </p>
          ) : (
            <p className="text-gray-400">Sin seleccionar</p>
          )}
        </div>
        <div>
          <p className="font-medium text-gray-700">Hotel</p>
          {hotel ? (
            <p className="text-gray-600">
              {hotel.nombre} {noches > 0 && `· ${noches} noches`}
            </p>
          ) : (
            <p className="text-gray-400">Sin seleccionar</p>
          )}
        </div>
      </div>

      <dl className="mt-3 space-y-1 border-t border-gray-100 pt-3">
        {vuelo && (
          <div className="flex justify-between">
            <dt className="text-gray-600">
              Vuelo x {pasajeros} {pasajeros === 1 ? 'pasajero' : 'pasajeros'}
            </dt>
            <dd>{formatPrice(totalVuelo)}</dd>
          </div>
        )}
        {hotel && vuelo && (
          <div className="flex justify-between">
            <dt className="text-gray-600">Hotel x {noches} noches</dt>
            <dd>{formatPrice(totalHotel)}</dd>
          </div>
        )}
        <div className="flex justify-between pt-1 text-base font-bold text-gray-900">
          <dt>Total</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>

      {hotel && !vuelo && <p className="mt-2 text-xs text-gray-500">Elige un vuelo para calcular las noches de hotel.</p>}

      {showLink && (
        <Link to="/mi-viaje" className="btn btn-primary mt-4 w-full">
          Revisar mi viaje
        </Link>
      )}
    </aside>
  )
}
