import { useState } from "react";
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
      id: "/crypto",
      title: "Crypto Payment",
    },
    {
      id: "/payments",
      title: "Payment Details",
    },
    {
      id: "/search",
      title: "Search Hotels",
    },
  ];
  const [connectWallet, setConnectWallet] = useState("MetaMask");
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
      console.log("MetaMask Connect Successfully");
    } else {
      setErrorMessage("Install MetaMasks");
    }
  };
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
            <li className="navbar__items">
              <Link onClick={connectWalletHandler}>Connect Wallet</Link>

              {/* {connectWallet} */}
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
