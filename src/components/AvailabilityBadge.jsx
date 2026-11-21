import Badge from './Badge'

export default function AvailabilityBadge({ quantity, unit }) {
  if (quantity === 0) return <Badge variant="danger">Sin disponibilidad</Badge>
  if (quantity <= 3) return <Badge variant="warning">Quedan {quantity} {unit}</Badge>
  return <Badge variant="ok">{quantity} {unit} disponibles</Badge>
}
