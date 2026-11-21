export const API_URL = '/api'

export async function getJSON(url, signal) {
  const response = await fetch(url, { signal })

  if (!response.ok) {
    const error = new Error(response.status === 404 ? 'No encontramos lo que buscas.' : 'No se pudo cargar la información.')
    error.status = response.status
    throw error
  }

  return response.json()
}
