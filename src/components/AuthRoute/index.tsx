import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "@/store"

const ProtectedRoute = () => {
  const userState = useSelector((state: RootState) => state.user)

  return userState?.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace={true} />
  )
}

export default ProtectedRoute
