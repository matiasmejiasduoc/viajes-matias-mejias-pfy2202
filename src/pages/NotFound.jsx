import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="card mx-auto max-w-lg p-6 text-center">
      <h1 className="text-xl font-bold text-gray-900">Página no encontrada</h1>
      <p className="mt-2 text-gray-600">La dirección que ingresaste no existe.</p>
      <Link to="/" className="btn btn-primary mt-5">
        Volver al inicio
      </Link>
    </div>
  )
}
