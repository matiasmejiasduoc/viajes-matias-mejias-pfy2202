const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-4 text-center text-sm text-gray-500">
      Viajes Mejías · Desarrollo Frontend II (PFY2202) · {year}
    </footer>
  )
}
