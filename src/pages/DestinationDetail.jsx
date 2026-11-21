import { Link, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import TravelOptions from '../components/TravelOptions'
import TripSummary from '../components/TripSummary'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../services/api'

export default function DestinationDetail() {
  const { destinoId } = useParams()
  const { data: destino, loading, error } = useFetch(`${API_URL}/destinos/${destinoId}`)

  if (loading) return <Loader text="Cargando destino..." />

  if (error) {
    return (
      <ErrorMessage message={error.status === 404 ? 'El destino que buscas no existe.' : error.message}>
        <Link to="/destinos" className="btn btn-secondary">
          Volver a destinos
        </Link>
      </ErrorMessage>
    )
  }

  return (
    <>
      <nav className="mb-4 text-sm text-gray-500">
        <Link to="/destinos" className="text-sky-700 hover:underline">
          Destinos
        </Link>{' '}
        / {destino.ciudad}
      </nav>

      <section className="card mb-6 p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          {destino.ciudad}, {destino.pais}
        </h1>
        <p className="mt-2 text-gray-600">{destino.descripcion}</p>

        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-gray-500">Mejor temporada</dt>
            <dd className="font-medium">{destino.temporada}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Moneda</dt>
            <dd className="font-medium">{destino.moneda}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Idioma</dt>
            <dd className="font-medium">{destino.idioma}</dd>
          </div>
        </dl>

        <h2 className="mt-5 font-semibold text-gray-900">Actividades populares</h2>
        <ul className="mt-2 grid gap-1 text-sm text-gray-600 sm:grid-cols-2">
          {destino.actividades.map((actividad) => (
            <li key={actividad} className="list-inside list-disc">
              {actividad}
            </li>
          ))}
        </ul>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TravelOptions destino={destino} />
        </div>
        <div className="lg:sticky lg:top-4 lg:self-start">
          <TripSummary />
        </div>
      </div>
    </>
  )
}
