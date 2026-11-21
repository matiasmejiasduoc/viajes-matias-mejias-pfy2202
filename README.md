# Viajes Mejías

Sitio publicado: https://matiasmejiasduoc.github.io/viajes-matias-mejias-pfy2202/

Aplicación de una agencia de viajes hecha en React para Desarrollo Frontend II (PFY2202). Se pueden ver destinos y, al elegir uno, revisar los vuelos y hoteles disponibles para armar el viaje.

El backend es un mock hecho con MSW:

- REST (`/api/destinos`) para listar los destinos con su país y actividades.
- GraphQL (`/graphql`) para consultar los vuelos y hoteles de cada destino con precios, fechas y disponibilidad. Las consultas se hacen con Apollo Client.

## Tecnologías

- React + Vite
- React Router
- Apollo Client y GraphQL
- MSW
- Tailwind CSS

## Rutas

- `/` inicio
- `/destinos` listado de destinos
- `/destinos/:destinoId` vuelos y hoteles del destino
- `/mi-viaje` resumen del viaje

## Cómo ejecutar

```bash
npm install
npm run dev
```

Para publicar en GitHub Pages:

```bash
npm run deploy
```

## Pruebas

Probé el sitio en Chrome (escritorio y vista móvil) y en Brave. Las capturas están en la carpeta `docs/evidencia`.

## Autor

Matías Mejías
