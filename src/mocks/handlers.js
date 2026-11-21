import { HttpResponse, delay, http } from 'msw'
import { graphql } from 'msw/graphql'
import { destinos } from './data/destinos'
import { hoteles } from './data/hoteles'
import { vuelos } from './data/vuelos'

const api = graphql.link('/graphql')

const resumenDestino = ({ id, ciudad, pais, region, descripcion, actividades }) => ({
  id,
  ciudad,
  pais,
  region,
  descripcion,
  actividades,
})

export const handlers = [
  http.get('/api/destinos', async () => {
    await delay(500)
    return HttpResponse.json(destinos.map(resumenDestino))
  }),

  http.get('/api/destinos/:id', async ({ params }) => {
    await delay(400)
    const destino = destinos.find((item) => item.id === Number(params.id))

    if (!destino) {
      return HttpResponse.json({ mensaje: 'Destino no encontrado' }, { status: 404 })
    }

    return HttpResponse.json(destino)
  }),

  api.query('OpcionesViaje', async ({ variables }) => {
    await delay(600)
    const destinoId = Number(variables.destinoId)

    return HttpResponse.json({
      data: {
        vuelos: vuelos
          .filter((vuelo) => vuelo.destinoId === destinoId)
          .map((vuelo) => ({ __typename: 'Vuelo', ...vuelo, disponible: vuelo.asientosDisponibles > 0 })),
        hoteles: hoteles
          .filter((hotel) => hotel.destinoId === destinoId)
          .map((hotel) => ({ __typename: 'Hotel', ...hotel, disponible: hotel.habitacionesDisponibles > 0 })),
      },
    })
  }),
]
