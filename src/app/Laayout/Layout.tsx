// Layout.tsx

import React from "react";
import "./styles.css"; // Import the CSS file

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex-container">
      {/* Left Section */}
      <div>
        <img
          src="/Images/Enitiate Logo.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="left-section">
        {/* Logo Image at the top left corner */}
        {/* <img
          src="/Images/Enitiate Logo.png"
          alt="Logo"
          className="logo"
        /> */}

        {/* Home Image in the middle left */}
        <img
          src="/Images/home pic.png"
          alt="Home"
          className="home-pic"
        />
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Children in the middle right */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
