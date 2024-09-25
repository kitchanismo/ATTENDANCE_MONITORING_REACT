import axios, { AxiosError } from "axios"
import createAuthRefreshInterceptor from "axios-auth-refresh"

const BASE_URL = import.meta.env.VITE_BASE_URL

axios.interceptors.request.use((config) => {
  config.baseURL = BASE_URL

  const accessToken = localStorage.getItem("accessToken")

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  config.withCredentials = true

  return config
})

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error?.response?.status === 402) {
      localStorage.removeItem("accessToken")
      window.location.href = "/"
      return
    }

    if (
      error.message === "Network Error" ||
      error.message === "Internal Server Error"
    ) {
      throw Error(error.message)
    }

    throw error
  }
)

createAuthRefreshInterceptor(
  axios,
  () => {
    return axios
      .get("api/auth/refresh-token")
      .then(({ data }) => {
        localStorage.setItem("accessToken", data?.accessToken)
        return Promise.resolve()
      })
      .catch((error) => {
        if (error?.response?.status === 406) {
          localStorage.removeItem("accessToken")
          window.location.href = "/"
        }
      })
  },
  {
    statusCodes: [403],
  }
)

export default axios
