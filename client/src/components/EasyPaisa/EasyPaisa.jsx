import React, { useEffect, useState } from "react";
import "./EasyPaisa.css";
import { getUser, createPost } from "../../service/Api";
import { useNavigate } from "react-router-dom";
// import easypaisa from "./images/qrcode.webp";
const EasyPaisa = () => {
  const [users, setUser] = useState([]);
  const [image, setImage] = useState({ myFile: "" });
  // console.log(image, 12);
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let res = await getUser();
    setUser(res.data);
    // console.log(res.data);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    createPost(image);
    console.log(image);
    console.log("upload image successfully");
    navigate("/payments");
  };
  const handlerFileUpload = async (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const base64 = await convertToBase64(file);
    setImage({ ...image, myFile: base64 });
    // console.log(base64);
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
            <form
              action=""
              className="payment_form"
              onSubmit={(e) => handlerSubmit(e)}
            >
              <div className="form_control">
                <label htmlFor="">Please Upload your Payment Slip</label>
                <input
                  onChange={(e) => handlerFileUpload(e)}
                  type="file"
                  label="image"
                  name="myFile"
                  accept=".jpg,png,jpeg"
                  onc
                />
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
              <div className="upload_image">
                <img
                  sizes="45px"
                  src={image.myFile || "./images/qrcode.webp"}
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyPaisa;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = () => {
      reject(error);
    };
  });
}
