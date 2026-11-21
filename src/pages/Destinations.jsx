import { useMemo, useState } from 'react'
import DestinationCard from '../components/DestinationCard'
import DestinationFilters from '../components/DestinationFilters'
import EmptyState from '../components/EmptyState'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import PageHeader from '../components/PageHeader'
import { useFetch } from '../hooks/useFetch'
import { API_URL } from '../services/api'

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

export default function Destinations() {
  const { data: destinos, loading, error } = useFetch(`${API_URL}/destinos`)
  const [region, setRegion] = useState('')
  const [search, setSearch] = useState('')

  const regions = useMemo(() => [...new Set((destinos ?? []).map((destino) => destino.region))], [destinos])

  const filtered = useMemo(() => {
    const term = normalize(search.trim())
    return (destinos ?? []).filter((destino) => {
      const matchesRegion = !region || destino.region === region
      const matchesSearch = !term || normalize(`${destino.ciudad} ${destino.pais}`).includes(term)
      return matchesRegion && matchesSearch
    })
  }, [destinos, region, search])

  const resetFilters = () => {
    setRegion('')
    setSearch('')
  }

  return (
    <>
      <PageHeader
        title="Destinos"
        subtitle={destinos ? `${filtered.length} de ${destinos.length} destinos` : 'Elige dónde quieres viajar'}
      />

      {loading && <Loader text="Cargando destinos..." />}
      {error && <ErrorMessage message={error.message} />}

      {destinos && (
        <>
          <DestinationFilters
            regions={regions}
            region={region}
            search={search}
            onRegionChange={setRegion}
            onSearchChange={setSearch}
          />
          {filtered.length === 0 ? (
            <EmptyState title="No hay destinos que coincidan con tu búsqueda.">
              <button type="button" className="btn btn-secondary" onClick={resetFilters}>
                Limpiar filtros
              </button>
            </EmptyState>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((destino) => (
                <DestinationCard key={destino.id} destino={destino} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}
