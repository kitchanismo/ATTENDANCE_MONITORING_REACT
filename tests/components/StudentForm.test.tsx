import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import StudentForm from "@/components/StudentForm"
import userEvent from "@testing-library/user-event"
import { store } from "@/store"

describe("StudentForm Validation", () => {
  const Component = () => (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <StudentForm />
      </MemoryRouter>
    </Provider>
  )
  it("should render student form", () => {
    const { container } = render(<Component />)

    expect(container).toHaveTextContent(/create student/i)
  })
  it("should validate empty fields except middlename", async () => {
    const { container } = render(<Component />)

    await userEvent.type(screen.getByLabelText(/student id/i), "sample")
    await userEvent.type(screen.getByLabelText(/rfid/i), "sample")
    await userEvent.type(screen.getByLabelText(/first/i), "sample")
    await userEvent.type(screen.getByLabelText(/last/i), "sample")
    await userEvent.click(screen.getByRole("button", { name: /create/i }))

    expect(container).not.toHaveTextContent(/required/i)
  })
})
