import React, { useState } from "react";
import "./Form.css";
import Instruction from "../Instruction/Instruction";

const Form = () => {
  const [input, setInput] = useState({});
  const onValueChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handelInput = (e) => {
    console.log("add data successfully");
  };
  return (
    <section className="form_sections">
      <div className="container">
        <div className="forms">
          <h1>Who's checking in</h1>

          <form action="/">
            <div className="form__control">
              <div className="forms_items">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  pattern="[A-Za-z]"
                  color="red"
                  name="firstName"
                  // value={input}
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="forms_items">
                <label htmlFor="">Second Name</label>
                <input
                  type="text"
                  name="secondName"
                  // value={input}
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="forms_items">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  name="phoneNo"
                  // value={input}
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="forms_items">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  // value={input}
                  onChange={(e) => onValueChange(e)}
                />
              </div>
            </div>
            <div className="btn">
              <button onClick={handelInput}>Proceed to Payment</button>
            </div>
          </form>
        </div>
        <Instruction />
      </div>
    </section>
  );
};

export default Form;
