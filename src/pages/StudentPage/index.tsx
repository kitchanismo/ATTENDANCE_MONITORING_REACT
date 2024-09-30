import withPermisson from "@/hoc/with.permission"

const StudentPage = () => {
  return <div className="container">StudentPage</div>
}

export default withPermisson(StudentPage, "m-student")
