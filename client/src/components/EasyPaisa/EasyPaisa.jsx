import React, { useEffect, useState } from "react";
import "./EasyPaisa.css";
import { getUser } from "../../service/Api";
const EasyPaisa = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let res = await getUser();
    setUser(res.data);
    // console.log(res.data);
  };
  return (
    <section className="easypaisa_payment_section">
      <div className="container">
        <div className="booking_details">
          <h1>Your Booking Details</h1>
          <div className="user__details">
            <div className="user__titles">
              <p>Full Name:</p>
              <p>Email:</p>
              <p>Phone Number:</p>
            </div>
            <div className="user__values">
              {
                <>
                  <p key={users.id}>
                    {users.firstName + " " + users.secondName}
                  </p>
                  <p key={users.id}>{users.email}</p>
                  <p key={users.id}>{users.phoneNo}</p>
                </>
              }
              {/* <p>Mohsin Hassan</p>
              <p>mohsin.hassan@gmail.com</p>
              <p>+91 999999999</p> */}
            </div>
          </div>
        </div>
        <div className="easypaisa_cards">
          <div className="qr_code">
            <img src="./images/qrcode.webp" alt="" />
          </div>
          <div className="payment__screenshot">
            <form action="" className="payment_form">
              <div className="form_control">
                <label htmlFor="">Please Upload your Payment Slip</label>
                <input type="file" />
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyPaisa;
