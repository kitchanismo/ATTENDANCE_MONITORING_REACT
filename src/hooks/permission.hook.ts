import { RootState } from "@/store"
import { useSelector } from "react-redux"

const usePermission = () => {
  return (code: string) => {
    const userState = useSelector((state: RootState) => state?.user)
    const show = userState?.currentUser?.role?.permissions?.find(
      (p) => p?.code === code
    )

    return !!show
  }
}

export default usePermission
