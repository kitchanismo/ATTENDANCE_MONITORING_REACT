import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "@/store"
import Layout from "../Layout"

const ProtectedRoute = () => {
  const userState = useSelector((state: RootState) => state.user)

  return userState?.isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/" replace={true} />
  )
}

export default ProtectedRoute
