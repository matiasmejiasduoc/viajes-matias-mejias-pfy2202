const clp = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
})

export const formatPrice = (value) => clp.format(value)

const toDate = (value) => new Date(`${value}T00:00:00`)

export const formatDate = (value) =>
  toDate(value).toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })

export const countNights = (from, to) => Math.round((toDate(to) - toDate(from)) / 86400000)

export const stopsLabel = (stops) => (stops === 0 ? 'Directo' : `${stops} escala${stops > 1 ? 's' : ''}`)
