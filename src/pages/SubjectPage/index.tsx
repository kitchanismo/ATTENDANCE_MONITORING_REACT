import withPermisson from "@/hoc/with.permission"

const SubjectPage = () => {
  return <div className="container">SubjectPage</div>
}

export default withPermisson(SubjectPage, "m-user")
