import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link to="/" className="text-blue-500">
        {/* The /login route is temporary while we don't have a Home page. */}
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
