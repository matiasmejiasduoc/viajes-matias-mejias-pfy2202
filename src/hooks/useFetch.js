import { useEffect, useState } from 'react'
import { getJSON } from '../services/api'

export function useFetch(url) {
  const [result, setResult] = useState({ url: null, data: null, error: null })

  useEffect(() => {
    const controller = new AbortController()

    getJSON(url, controller.signal)
      .then((data) => setResult({ url, data, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') setResult({ url, data: null, error })
      })

    return () => controller.abort()
  }, [url])

  const isCurrent = result.url === url

  return {
    data: isCurrent ? result.data : null,
    error: isCurrent ? result.error : null,
    loading: !isCurrent,
  }
}
