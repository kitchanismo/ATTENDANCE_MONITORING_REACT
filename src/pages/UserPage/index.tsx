import withPermission from "@/hoc/with.permission"

const UserPage = () => {
  return <div className="container">UserPage</div>
}

export default withPermission(UserPage, "m-user")
