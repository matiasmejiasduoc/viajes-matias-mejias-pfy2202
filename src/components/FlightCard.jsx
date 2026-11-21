import { formatDate, formatPrice, stopsLabel } from '../utils/format'
import AvailabilityBadge from './AvailabilityBadge'

export default function FlightCard({ vuelo, selected, onSelect }) {
  return (
    <article className={`card p-4 ${selected ? 'border-sky-600 ring-1 ring-sky-600' : ''}`}>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
        <div>
          <p className="font-semibold text-gray-900">
            {vuelo.aerolinea} <span className="font-normal text-gray-500">· {vuelo.numero}</span>
          </p>
          <p className="text-sm text-gray-600">Desde {vuelo.origen}</p>
        </div>
        <AvailabilityBadge quantity={vuelo.asientosDisponibles} unit="asientos" />
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-gray-500">Ida</dt>
          <dd>
            {formatDate(vuelo.salida)} · {vuelo.horaSalida}
          </dd>
        </div>
        <div>
          <dt className="text-gray-500">Vuelta</dt>
          <dd>{formatDate(vuelo.regreso)}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Duración</dt>
          <dd>{vuelo.duracion}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Tipo</dt>
          <dd>{stopsLabel(vuelo.escalas)}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-lg font-bold text-gray-900">{formatPrice(vuelo.precio)}</span>
          <span className="text-sm text-gray-500"> ida y vuelta por persona</span>
        </p>
        <button
          type="button"
          className={`btn ${selected ? 'btn-secondary' : 'btn-primary'}`}
          disabled={!vuelo.disponible || selected}
          onClick={() => onSelect(vuelo)}
        >
          {selected ? 'Seleccionado' : 'Elegir vuelo'}
        </button>
      </div>
    </article>
  )
}
