import { RootState } from "@/store"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const withPermisson = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  permissionCode: string
) => {
  return (props: P) => {
    const userState = useSelector((state: RootState) => state?.user)
    if (
      !userState?.currentUser?.role?.permissions?.find(
        (p) => p.code === permissionCode
      )
    ) {
      return <Navigate to="/not-found" />
    }

    return <WrappedComponent {...props} />
  }
}

export default withPermisson
