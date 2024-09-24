import Layout from "@/components/Layout"
import NotFound from "@/components/NotFound"
import LoginPage from "@/pages/LoginPage"
import StudentPage from "@/pages/StudentPage"
import SubjectPage from "@/pages/SubjectPage"
import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>

        <Route
          path="/dashboard"
          element={<Layout><div className="container">Hello World! :)</div></Layout>}
        />
        <Route path="/student" element={<Layout><StudentPage /></Layout>} />
        <Route path="/subject" element={<Layout><SubjectPage /></Layout>} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </React.Fragment>
  )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default AppRouter
