import SiteHeader from "@/components/SiteHeader"
import LoginPage from "@/pages/LoginPage"
import StudentPage from "@/pages/StudentPage"
import SubjectPage from "@/pages/SubjectPage"
import React from "react"
import { Route, BrowserRouter, Routes, Link } from "react-router-dom"

const NotFound = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">404 - Not Found</h2>
          <p className="text-lg text-gray-600 mb-6">Sorry, we couldn’t find the page you were looking for.</p>
          <Link to="/login" className="text-blue-500"> 
          {/* The /login route is temporary while we don't have a Home page. */}
            Return Home
          </Link>
    </div>
  );
};

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
