import NotFound from "@/components/NotFound"
import SiteHeader from "@/components/SiteHeader"
import LoginPage from "@/pages/LoginPage"
import StudentPage from "@/pages/StudentPage"
import SubjectPage from "@/pages/SubjectPage"
import React from "react"
import { Route, BrowserRouter, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <React.Fragment>
      {/* 
        Conditionally rendering the SiteHeader based on the current path.
        This isn't the best way to handle layout components and should be refactored
        in the future as part of another task.
      */}
      <SiteHeader />
      <Routes>
        <Route
          path="/dashboard"
          element={<div className="container">Hello World! :)</div>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/subject" element={<SubjectPage />} />
        {/* Comment out this route to enable the NotFound page functionality. */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* The NotFound page will be displayed below the SiteHeader. The SiteHeader will not be moved, as my task is only to implement the NotFound page. */}
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
