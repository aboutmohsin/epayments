import React, { useState } from "react";
import "./CryptoPayment.css";
import { FaEthereum } from "react-icons/fa";
const CryptoPayment = () => {
  const [input, setInput] = useState({});
  const [defaultAccount, setDefaultAccount] = useState("Account Address");
  const [userBalance, setUserBalance] = useState("0.00 ETH");
  const [connButtonText, setConnButtonText] = useState("SEND NOW");
  const [errorMessage, setErrorMessage] = useState(null);

  const onChangeValue = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    // getUserBalance(newAccount);
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
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
  return (
    <section className="form_sections">
      <div className="container">
        <div className="forms">
          <h1>Who's checking in</h1>
          <div className="form__cards">
            <form action="" className="crypto_form">
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
                  <p>{userBalance}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="metamask_error">{errorMessage}</div>

        {/* <Instruction /> */}
      </div>
      <div className="wall-card">
        <h4>Connection to MetaMask using window.etherum</h4>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div className="accountDisplay">
          <h3> Address:{defaultAccount}</h3>
        </div>
        <div className="balanceDisplay">
          <h3>Balance: {userBalance}</h3>
        </div>
        {errorMessage}
      </div>
    </section>
  );
};

export default CryptoPayment;
