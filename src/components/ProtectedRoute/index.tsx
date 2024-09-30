import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { AppDispatch, RootState } from "@/store"
import Layout from "../Layout"
import { ErrorBoundary } from "react-error-boundary"
import FallbackError from "../FallbackError"
import { actions } from "@/store/slices/user.slice"

const ProtectedRoute = () => {
  const userState = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  return userState?.isAuthenticated ? (
    <ErrorBoundary
      FallbackComponent={FallbackError}
      onReset={(details) => {
        dispatch(actions.logout())
        window.location.href = "/"
      }}
    >
      <Layout>
        <Outlet />
      </Layout>
    </ErrorBoundary>
  ) : (
    <Navigate to="/" replace={true} />
  )
}

export default ProtectedRoute
