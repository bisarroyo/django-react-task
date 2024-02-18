import Router from './routes/Router'
import { AppProvider } from './context/AppProvider'

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

export default App
