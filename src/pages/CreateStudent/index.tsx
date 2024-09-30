import CreateStudentForm from "@/components/StudentForm"
import withPermisson from "@/hoc/with.permission"

const CreateStudent = () => {
  return (
    <div className="container">
      <CreateStudentForm />
    </div>
  )
}

export default withPermisson(CreateStudent, "m-student")
