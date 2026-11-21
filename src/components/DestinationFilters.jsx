export default function DestinationFilters({ regions, region, search, onRegionChange, onSearchChange }) {
  return (
    <div className="card mb-6 grid gap-3 p-4 sm:grid-cols-2">
      <div>
        <label htmlFor="buscar" className="label">
          Buscar por ciudad o país
        </label>
        <input
          id="buscar"
          type="search"
          className="input"
          placeholder="Ej: Perú"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="region" className="label">
          Región
        </label>
        <select id="region" className="input" value={region} onChange={(event) => onRegionChange(event.target.value)}>
          <option value="">Todas</option>
          {regions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
