import usePermission from "@/hooks/permission.hook"
import { Navigate } from "react-router-dom"

const withPermission = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  permissionCode: string
) => {
  return (props: P) => {
    const show = usePermission()
    if (!show(permissionCode)) {
      return <Navigate to="/not-found" />
    }

    return <WrappedComponent {...props} />
  }
}

export default withPermission
