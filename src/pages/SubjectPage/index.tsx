import withPermission from "@/hoc/with.permission"

const SubjectPage = () => {
  return <div className="container">SubjectPage</div>
}

export default withPermission(SubjectPage, "m-subject")
