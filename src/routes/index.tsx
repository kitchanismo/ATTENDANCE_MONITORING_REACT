import SiteHeader from '@/components/SiteHeader';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import React from 'react';
import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';

const AppRoutes = () => {
  const location = useLocation();

  const shouldShowHeader = location.pathname !== '/login';

  return (
    <React.Fragment>
      {/* 
        Conditionally rendering the SiteHeader based on the current path.
        This isn't the best way to handle layout components and should be refactored
        in the future as part of another task.
      */}
      {shouldShowHeader && <SiteHeader />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
