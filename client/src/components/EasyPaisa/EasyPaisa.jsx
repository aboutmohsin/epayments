import React from "react";
import "./EasyPaisa.css";
const EasyPaisa = () => {
  return (
    <section className="easypaisa_payment_section">
      <div className="container">
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
