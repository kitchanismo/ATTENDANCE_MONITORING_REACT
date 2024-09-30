import withPermission from "@/hoc/with.permission"

const StudentPage = () => {
  return <div className="container">StudentPage</div>
}

export default withPermission(StudentPage, "m-student")
