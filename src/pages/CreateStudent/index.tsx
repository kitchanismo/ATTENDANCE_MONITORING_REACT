import CreateStudentForm from "@/components/StudentForm"
import withPermission from "@/hoc/with.permission"

const CreateStudent = () => {
  return (
    <div className="container">
      <CreateStudentForm />
    </div>
  )
}

export default withPermission(CreateStudent, "m-student")
