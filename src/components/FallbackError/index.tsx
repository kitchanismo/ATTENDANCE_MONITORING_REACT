import { Button } from "../ui/button"

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

const FallbackError = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Something went wrong:
      </h2>
      <p className="text-lg text-gray-600 mb-6">{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  )
}

export default FallbackError
