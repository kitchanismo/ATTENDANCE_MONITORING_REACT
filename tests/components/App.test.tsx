//import App from "../../src/App"
import App from "@/App"
import { render, screen } from "@testing-library/react"

describe("App", () => {
  it("should render App", () => {
    render(<App />)

    const heading = screen.getByRole("button")
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/login/i)
  })
})
