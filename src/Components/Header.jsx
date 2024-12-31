import React, { useState } from "react";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <header className="header-container">
      <h1>
        Janada <span>Jayathilaka</span>
      </h1>
      <nav>
        <img
          src={menu}
          alt="menu"
          onClick={() => {
            setMenuClick(true);
          }}
        />
        <ul
          style={{
            right: `${menuClick ? "-20px" : "-250px"}`,
          }}
        >
          <div
            className="header-menuclose"
            onClick={() => {
              setMenuClick(false);
            }}
          >
            <img src={close} alt="close icon" />
          </div>
          <div className="header-menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
