import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "@/routes"
import configureMockStore from "redux-mock-store"
import { RootState } from "@/store"
import { protectedRoutes } from "../test.utils"

const mockStore = configureMockStore()

describe("Protected Routes", () => {
  const renderComponent = (isAuthenticated: boolean, initialRoute = "/") => {
    const store = mockStore({
      user: {
        isAuthenticated,
      },
    } as RootState)
    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <AppRoutes />
        </MemoryRouter>
      </Provider>
    )
  }

  it("should renders dashboard page when authenticated", () => {
    const { container } = renderComponent(true, "/dashboard")
    expect(container).toHaveTextContent(/hello/i)
  })

  it("should redirects to login when trying to access protected routes unauthenticated", () => {
    //dynamically get all protected routes
    protectedRoutes.forEach((path) => {
      const { container } = renderComponent(false, path)
      expect(container).toHaveTextContent(/login/i)
    })
  })

  it("should renders not found page when its not on registered routes", () => {
    const { container } = renderComponent(true, "/random")
    expect(container).toHaveTextContent(/404/i)
  })
})
