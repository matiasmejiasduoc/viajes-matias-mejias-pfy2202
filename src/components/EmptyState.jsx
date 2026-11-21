export default function EmptyState({ title, children }) {
  return (
    <div className="card px-4 py-8 text-center">
      <p className="font-medium text-gray-700">{title}</p>
      {children && <div className="mt-3 text-sm text-gray-500">{children}</div>}
    </div>
  )
}
