import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-soft-warm-gray">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-soft-warm-gray p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout; 