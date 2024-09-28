import LoginForm from "@/components/LoginForm"
import { render, screen } from "@testing-library/react"
import { store } from "@/store"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe("LoginForm Frontend Validation", () => {
  const Component = () => (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <LoginForm />
      </MemoryRouter>
    </Provider>
  )

  it("should render login form", () => {
    const { container } = render(<Component />)

    expect(container).toHaveTextContent(/login/i)
  })

  it("should validate empty fields or at least 6 characters", async () => {
    const { container } = render(<Component />)

    await userEvent.click(screen.getByRole("button", { name: /login/i }))
    await userEvent.type(screen.getByLabelText(/username/i), "sample123")
    await userEvent.type(screen.getByLabelText(/password/i), "sample123")

    expect(container).toHaveTextContent(/6 character/i)
  })

  it("should validate fields that contain at least one number", async () => {
    const { container } = render(<Component />)

    await userEvent.type(screen.getByLabelText(/username/i), "sample123")
    await userEvent.type(screen.getByLabelText(/password/i), "sample123")
    await userEvent.click(screen.getByRole("button", { name: /login/i }))

    expect(container).not.toHaveTextContent(/one number/i)
  })

  it("should validate fields that contain at least one letter", async () => {
    const { container } = render(<Component />)

    await userEvent.type(screen.getByLabelText(/username/i), "sample123")
    await userEvent.type(screen.getByLabelText(/password/i), "sample123")
    await userEvent.click(screen.getByRole("button", { name: /login/i }))

    expect(container).not.toHaveTextContent(/one letter/i)
  })
})
