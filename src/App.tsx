import { ThemeProvider } from "./providers/ThemeProvider"
import AppRouter from "./routes"

function App() {
  return (
    <html lang="en">
      <head />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <body className="flex min-h-screen flex-col">
          <AppRouter />
        </body>
      </ThemeProvider>
    </html>
  )
}

export default App
