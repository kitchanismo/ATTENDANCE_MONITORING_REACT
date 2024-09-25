import { ThemeProvider } from "./providers/ThemeProvider"
import AppRouter from "./routes"
import { Provider } from "react-redux"
import { persistor, store } from "./store"
import { PersistGate } from "redux-persist/integration/react"

function App() {
  return (
    <html lang="en">
      <head />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body className="flex min-h-screen flex-col">
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <AppRouter />
            </PersistGate>
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  )
}

export default App
