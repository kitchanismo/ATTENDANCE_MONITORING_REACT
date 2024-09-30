import withPermisson from "@/hoc/with.permission"

const UserPage = () => {
  return <div className="container">UserPage</div>
}

export default withPermisson(UserPage, "m-user")
