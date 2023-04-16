import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const listItems = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/easypaisa",
      title: "EasyPaisa",
    },
    {
      id: "/metamask",
      title: "MetaMask",
    },
  ];
  return (
    <section className="navbar_section">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar__list">
            {listItems.map((items) => (
              <li className="navbar__items" key={items.id}>
                <Link to={items.id}>{items.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
