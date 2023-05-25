import React, { useState } from "react";
import "./CryptoPayment.css";
import { ethers } from "ethers";
import { FaEthereum } from "react-icons/fa";
const CryptoPayment = () => {
  const [input, setInput] = useState({});
  const [defaultAccount, setDefaultAccount] = useState("Account Address");
  const [userBalance, setUserBalance] = useState("0.00");
  const [connButtonText, setConnButtonText] = useState("Connet Wallet");
  const [errorMessage, setErrorMessage] = useState(null);

  const onChangeValue = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
        console.log("User Balance:", userBalance);
      });
  };
  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMasks");
    }
  };
  window.ethereum.on("accountChange", accountChangeHandler);
  return (
    <section className="form_sections">
      <div className="container">
        <div className="payments_forms">
          <h1>Who's checking in</h1>
          <div className="form__cards">
            <form action="" className="crypto_form">
              <div
                className="crypto_form__control "
                id="address_to"
                onChange={(e) => onChangeValue(e)}
              >
                <input
                  type="text"
                  name="addressFrom"
                  placeholder="Address From"
                  value={defaultAccount}
                />
              </div>
              <div
                className="crypto_form__control "
                id="address_to"
                onChange={(e) => onChangeValue(e)}
              >
                <input type="text" name="addressTo" placeholder="Address to" />
              </div>
              <div className="crypto_form__control">
                <input
                  type="number"
                  name="amountETH"
                  placeholder="Amount (ETH)"
                  onChange={(e) => onChangeValue(e)}
                />
              </div>
              <div className="crypto_form__control">
                <textarea
                  placeholder="Enter your message"
                  name="message"
                  onChange={(e) => onChangeValue(e)}
                ></textarea>
                {/* <input type="number" placeholder="Amount (ETH)" /> */}
              </div>
              <div className="crypto_form__control">
                {/* <button onClick={connectWalletHandler}>Send Now</button> */}
                <button onClick={connectWalletHandler}>{connButtonText}</button>
              </div>
            </form>
            <div className="balance_card">
              <div className="ether_icon">
                <FaEthereum size={60} />
                <button onClick={connectWalletHandler}>{connButtonText}</button>
              </div>
              <div className="balnace_details">
                <div className="account__title">
                  <p>Account</p>
                  <p>Balance</p>
                </div>
                <div className="account__details">
                  {/* <p>0x1232....89</p> */}
                  <p>{defaultAccount}</p>
                  {/* <p>1.23 ETH</p> */}
                  <p>{userBalance} ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metamask_error">{errorMessage}</div>

        {/* <Instruction /> */}
      </div>
    </section>
  );
};

export default CryptoPayment;
