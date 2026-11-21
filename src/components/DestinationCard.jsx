import { Link } from 'react-router-dom'
import Badge from './Badge'

export default function DestinationCard({ destino }) {
  return (
    <article className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{destino.ciudad}</h2>
          <p className="text-sm text-gray-500">{destino.pais}</p>
        </div>
        <Badge>{destino.region}</Badge>
      </div>
      <p className="mt-3 text-sm text-gray-600">{destino.descripcion}</p>
      <div className="mt-3">
        <p className="text-xs font-semibold uppercase text-gray-500">Actividades populares</p>
        <ul className="mt-1 list-inside list-disc text-sm text-gray-600">
          {destino.actividades.slice(0, 2).map((actividad) => (
            <li key={actividad}>{actividad}</li>
          ))}
        </ul>
      </div>
      <Link to={`/destinos/${destino.id}`} className="btn btn-primary mt-4 sm:self-start">
        Ver vuelos y hoteles
      </Link>
    </article>
  )
}
