import React, { useEffect, useState } from "react";

import { getUser, getPost } from "../../service/Api";
// import { getImage } from "../../../../server/controller/userController";

const PaymentImage = () => {
  const [users, setUser] = useState([]);
  const [image, setImage] = useState({ myFile: "" });
  useEffect(() => {
    getUserDetails();
    getPaymentImage();
  }, []);
  const getUserDetails = async () => {
    let res = await getUser();
    setUser(res.data);
    // console.log(res.data);
  };
  const getPaymentImage = async () => {
    let res = await getPost();
    console.log(res);
    setImage(res.data);
  };
  return (
    <div className="clint_Details">
      <div className="payments_forms">
        <h1>Your Booking Details</h1>
        <div className="user__details">
          <div className="user__titles">
            <p>Full Name:</p>
            <p>Email:</p>
            <p>Phone Number:</p>
            <p>Paymnet Slip</p>
          </div>
          <div className="user__values">
            {
              <>
                <p key={users.id}>{users.firstName + " " + users.secondName}</p>
                <p key={users.id}>{users.email}</p>
                <p key={users.id}>{users.phoneNo}</p>
                <span key={image.id}>
                  <img
                    src={image.myFile || "./images/qrcode.webp"}
                    alt="Your Payment Slip"
                  />
                </span>
                <img src={"./"} alt="" />
              </>
            }
            {/* <p>Mohsin Hassan</p>
              <p>mohsin.hassan@gmail.com</p>
              <p>+91 999999999</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentImage;
