import React from 'react';
import BottomBar from './BottomBar';
import SideBar from './SideBar';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="flex h-full w-full flex-col items-center justify-center lg:flex-row">
        <SideBar />
        <main className="h-full w-full">{children}</main>
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
