// src/components/ui/Layout.tsx
import React from 'react';
import SiteHeader from './SiteHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
