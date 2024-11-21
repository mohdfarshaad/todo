import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content area with sidebar space */}
      <div className="flex pt-16">
        <Sidebar />
        {/* Body content */}
        <div className="flex-1 bg-gray-100 p-6">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
