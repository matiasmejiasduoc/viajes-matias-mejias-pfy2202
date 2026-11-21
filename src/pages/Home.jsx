import { Link } from 'react-router-dom'
import DestinationCard from '../components/DestinationCard'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../services/api'

const steps = [
  { title: 'Elige un destino', text: 'Revisa los destinos disponibles y sus actividades más populares.' },
  { title: 'Compara vuelos y hoteles', text: 'Mira precios, fechas y disponibilidad de cada opción.' },
  { title: 'Arma tu viaje', text: 'Selecciona vuelo y hotel, indica los pasajeros y revisa el total.' },
]

export default function Home() {
  const { data: destinos, loading, error } = useFetch(`${API_URL}/destinos`)

  return (
    <>
      <section className="card mb-8 px-4 py-8 sm:px-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Planifica tu próximo viaje</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Encuentra vuelos desde Santiago y hoteles en los destinos más buscados de Sudamérica, Norteamérica, Europa y Asia.
        </p>
        <Link to="/destinos" className="btn btn-primary mt-5">
          Ver destinos
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-gray-900">¿Cómo funciona?</h2>
        <ol className="grid gap-3 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="card p-4">
              <p className="text-sm font-semibold text-sky-700">Paso {index + 1}</p>
              <p className="font-medium text-gray-900">{step.title}</p>
              <p className="mt-1 text-sm text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Destinos destacados</h2>
          <Link to="/destinos" className="text-sm text-sky-700 hover:underline">
            Ver todos
          </Link>
        </div>
        {loading && <Loader text="Cargando destinos..." />}
        {error && <ErrorMessage message={error.message} />}
        {destinos && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destinos.slice(0, 3).map((destino) => (
              <DestinationCard key={destino.id} destino={destino} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
