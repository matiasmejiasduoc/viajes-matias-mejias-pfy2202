import { formatPrice } from '../utils/format'
import AvailabilityBadge from './AvailabilityBadge'
import Stars from './Stars'

export default function HotelCard({ hotel, selected, onSelect }) {
  return (
    <article className={`card p-4 ${selected ? 'border-sky-600 ring-1 ring-sky-600' : ''}`}>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between">
        <div>
          <p className="font-semibold text-gray-900">{hotel.nombre}</p>
          <Stars count={hotel.estrellas} />
        </div>
        <AvailabilityBadge quantity={hotel.habitacionesDisponibles} unit="habitaciones" />
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-gray-500">Zona</dt>
          <dd>{hotel.zona}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Desayuno</dt>
          <dd>{hotel.desayuno ? 'Incluido' : 'No incluido'}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-lg font-bold text-gray-900">{formatPrice(hotel.precioNoche)}</span>
          <span className="text-sm text-gray-500"> por noche</span>
        </p>
        <button
          type="button"
          className={`btn ${selected ? 'btn-secondary' : 'btn-primary'}`}
          disabled={!hotel.disponible || selected}
          onClick={() => onSelect(hotel)}
        >
          {selected ? 'Seleccionado' : 'Elegir hotel'}
        </button>
      </div>
    </article>
  )
}
