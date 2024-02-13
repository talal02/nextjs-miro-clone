import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="text-xs p-1 text-while bg-green-300">
        I am a useable navbar!
      </nav>
      {children}
    </div>
  );
}

export default Layout;