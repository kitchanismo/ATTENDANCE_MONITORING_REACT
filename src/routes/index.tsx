import ProtectedRoute from "@/components/ProtectedRoute"
import NotFound from "@/components/NotFound"
import LoginPage from "@/pages/LoginPage"
import StudentPage from "@/pages/StudentPage"
import SubjectPage from "@/pages/SubjectPage"
import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import CreateStudent from "@/pages/CreateStudent"
import UserPage from "@/pages/UserPage"
import ManageAccount from "@/pages/ManageAccount"

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
          <Route path="/user" element={<UserPage />} />
          <Route path="/account" element={<ManageAccount />} />
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
