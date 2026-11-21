import { useQuery } from '@apollo/client/react'
import { useState } from 'react'
import { useTrip } from '../context/useTrip'
import { OPCIONES_VIAJE } from '../graphql/queries'
import EmptyState from './EmptyState'
import ErrorMessage from './ErrorMessage'
import FlightCard from './FlightCard'
import HotelCard from './HotelCard'
import Loader from './Loader'
import OptionsToolbar from './OptionsToolbar'
import Tabs from './Tabs'

const prepare = (items, onlyAvailable, sort, priceKey) =>
  items
    .filter((item) => !onlyAvailable || item.disponible)
    .toSorted((a, b) => (sort === 'asc' ? a[priceKey] - b[priceKey] : b[priceKey] - a[priceKey]))

export default function TravelOptions({ destino }) {
  const { data, loading, error, refetch } = useQuery(OPCIONES_VIAJE, {
    variables: { destinoId: String(destino.id) },
  })
  const trip = useTrip()
  const [tab, setTab] = useState('vuelos')
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [sort, setSort] = useState('asc')

  if (loading) return <Loader text="Buscando vuelos y hoteles..." />

  if (error) {
    return (
      <ErrorMessage message="No pudimos cargar los vuelos y hoteles.">
        <button type="button" className="btn btn-secondary" onClick={() => refetch()}>
          Reintentar
        </button>
      </ErrorMessage>
    )
  }

  const sameDestino = trip.destino?.id === destino.id
  const resumen = { id: destino.id, ciudad: destino.ciudad, pais: destino.pais }
  const vuelos = prepare(data.vuelos, onlyAvailable, sort, 'precio')
  const hoteles = prepare(data.hoteles, onlyAvailable, sort, 'precioNoche')
  const items = tab === 'vuelos' ? vuelos : hoteles

  const tabs = [
    { id: 'vuelos', label: `Vuelos (${data.vuelos.length})` },
    { id: 'hoteles', label: `Hoteles (${data.hoteles.length})` },
  ]

  return (
    <section>
      <Tabs tabs={tabs} active={tab} onChange={setTab} />
      <OptionsToolbar
        onlyAvailable={onlyAvailable}
        sort={sort}
        onOnlyAvailableChange={setOnlyAvailable}
        onSortChange={setSort}
      />

      {items.length === 0 && <EmptyState title="No hay opciones disponibles con estos filtros." />}

      <div className="space-y-3">
        {tab === 'vuelos' &&
          vuelos.map((vuelo) => (
            <FlightCard
              key={vuelo.id}
              vuelo={vuelo}
              selected={sameDestino && trip.vuelo?.id === vuelo.id}
              onSelect={(item) => trip.selectVuelo(resumen, item)}
            />
          ))}
        {tab === 'hoteles' &&
          hoteles.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              selected={sameDestino && trip.hotel?.id === hotel.id}
              onSelect={(item) => trip.selectHotel(resumen, item)}
            />
          ))}
      </div>
    </section>
  )
}
