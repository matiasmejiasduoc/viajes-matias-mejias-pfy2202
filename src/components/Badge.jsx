const variants = {
  ok: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-700',
  neutral: 'bg-gray-100 text-gray-700',
}

export default function Badge({ variant = 'neutral', children }) {
  return <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${variants[variant]}`}>{children}</span>
}
