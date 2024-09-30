import usePermission from "@/hooks/permission.hook"
import { Navigate } from "react-router-dom"

const withPermisson = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  permissionCode: string
) => {
  return (props: P) => {
    const show = usePermission(permissionCode)
    if (!show) {
      return <Navigate to="/not-found" />
    }

    return <WrappedComponent {...props} />
  }
}

export default withPermisson
