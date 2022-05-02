import React from 'react';
import BottomBar from './BottomBar';
import SideBar from './SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="relative">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <SideBar />
          <main className="h-screen w-screen">{children}</main>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default Layout;
