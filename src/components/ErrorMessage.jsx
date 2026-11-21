export default function ErrorMessage({ message, children }) {
  return (
    <div className="rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
      <p>{message}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  )
}
