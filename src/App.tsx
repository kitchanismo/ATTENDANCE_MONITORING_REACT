import AppRouter from './routes';

function App() {
  return (
    <html lang="en">
      <head />
      {/* TODO: Add ThemeProvider for dark and light mode */}
      <body className="flex min-h-screen flex-col">
        <AppRouter />
      </body>
    </html>
  );
}

export default App;
