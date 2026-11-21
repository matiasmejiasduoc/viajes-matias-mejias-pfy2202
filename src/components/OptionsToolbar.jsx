export default function OptionsToolbar({ onlyAvailable, sort, onOnlyAvailableChange, onSortChange }) {
  return (
    <div className="card mb-4 flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          className="h-4 w-4 accent-sky-600"
          checked={onlyAvailable}
          onChange={(event) => onOnlyAvailableChange(event.target.checked)}
        />
        Mostrar solo opciones disponibles
      </label>
      <div className="flex items-center gap-2">
        <label htmlFor="orden" className="text-sm text-gray-700">
          Ordenar por
        </label>
        <select id="orden" className="input w-auto" value={sort} onChange={(event) => onSortChange(event.target.value)}>
          <option value="asc">Menor precio</option>
          <option value="desc">Mayor precio</option>
        </select>
      </div>
    </div>
  )
}
