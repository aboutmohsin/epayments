import React, { useState } from "react";
import "./Form.css";
import Instruction from "../Instruction/Instruction";
import { addUser } from "../../service/Api";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const onValueChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const addUserDetails = async () => {
    await addUser(input);
    navigate("/easypaisa");
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
                  placeholder="john"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="forms_items">
                <label htmlFor="">Second Name</label>
                <input
                  type="text"
                  name="secondName"
                  placeholder="vick"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="forms_items">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  name="phoneNo"
                  placeholder="03XXXXXXXXX"
                  onChange={(e) => onValueChange(e)}
                />
              </div>
              <div className="forms_items">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  onChange={(e) => onValueChange(e)}
                  required
                />
              </div>
            </div>
            <div className="btn">
              <button onClick={() => addUserDetails()}>
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
        <Instruction />
      </div>
    </section>
  );
};

export default Form;
