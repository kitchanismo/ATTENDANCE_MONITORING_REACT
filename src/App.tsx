import { ThemeProvider } from "./providers/ThemeProvider"
import AppRouter from "./routes"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <html lang="en">
      <head />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body className="flex min-h-screen flex-col">
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  )
}

export default App
