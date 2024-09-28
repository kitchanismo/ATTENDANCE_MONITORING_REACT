import ProtectedRoute from "@/components/ProtectedRoute"
import NotFound from "@/components/NotFound"
import LoginPage from "@/pages/LoginPage"
import StudentPage from "@/pages/StudentPage"
import SubjectPage from "@/pages/SubjectPage"
import React from "react"
import { Route, BrowserRouter, Routes, RouteObject } from "react-router-dom"
import CreateStudent from "@/pages/CreateStudent"

export const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<div className="container">Hello World! :)</div>}
          />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/student/create" element={<CreateStudent />} />
          <Route path="/subject" element={<SubjectPage />} />
        </Route>
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
