import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home'))
const Destinations = lazy(() => import('../pages/Destinations'))
const DestinationDetail = lazy(() => import('../pages/DestinationDetail'))
const MyTrip = lazy(() => import('../pages/MyTrip'))
const NotFound = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="destinos">
          <Route index element={<Destinations />} />
          <Route path=":destinoId" element={<DestinationDetail />} />
        </Route>
        <Route path="mi-viaje" element={<MyTrip />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
