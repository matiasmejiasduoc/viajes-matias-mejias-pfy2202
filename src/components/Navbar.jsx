import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTrip } from '../context/useTrip'

const linkClass = ({ isActive }) =>
  `block rounded px-3 py-2 text-sm hover:bg-sky-800 ${isActive ? 'bg-sky-800' : ''}`

export default function Navbar() {
  const { itemCount } = useTrip()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="bg-sky-700 text-white">
      <nav className="container-app py-3 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold" onClick={close}>
            Viajes Mejías
          </Link>
          <button
            type="button"
            className="rounded border border-sky-500 px-3 py-1 text-sm sm:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-principal"
          >
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
        <div id="menu-principal" className={`${open ? 'mt-2 flex' : 'hidden'} flex-col gap-1 sm:mt-0 sm:flex sm:flex-row`}>
          <NavLink to="/" end className={linkClass} onClick={close}>
            Inicio
          </NavLink>
          <NavLink to="/destinos" className={linkClass} onClick={close}>
            Destinos
          </NavLink>
          <NavLink to="/mi-viaje" className={linkClass} onClick={close}>
            Mi viaje ({itemCount})
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
