import { ApolloProvider } from '@apollo/client/react'
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { TripProvider } from './context/TripProvider'
import { client } from './graphql/client'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <TripProvider>
        <HashRouter>
          <ScrollToTop />
          <AppRoutes />
        </HashRouter>
      </TripProvider>
    </ApolloProvider>
  )
}
