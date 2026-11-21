export default function Stars({ count }) {
  return (
    <span className="text-sm text-yellow-500" aria-label={`${count} estrellas`}>
      {'★'.repeat(count)}
      <span className="text-gray-300">{'★'.repeat(5 - count)}</span>
    </span>
  )
}
