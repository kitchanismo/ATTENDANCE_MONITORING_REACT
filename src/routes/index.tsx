import SiteHeader from "@/components/SiteHeader"
import LoginPage from "@/pages/LoginPage"
import StudentPage from "@/pages/StudentPage"
import SubjectPage from "@/pages/SubjectPage"
import React from "react"
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom"

const AppRoutes = () => {
  const location = useLocation()

  const shouldShowHeader = location.pathname !== "/login"

  return (
    <React.Fragment>
      {/* 
        Conditionally rendering the SiteHeader based on the current path.
        This isn't the best way to handle layout components and should be refactored
        in the future as part of another task.
      */}
      {shouldShowHeader && <SiteHeader />}
      <Routes>
        <Route
          path="/"
          element={<div className="container">Hello World! :)</div>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/subject" element={<SubjectPage />} />
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
