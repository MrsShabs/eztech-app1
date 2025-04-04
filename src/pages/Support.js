import React from "react";
import "../css/Support.css";

export default function Support() {

    const message = "Please write your message here:";
  return (
    <div className="support-container">
        <h1 className="support-heading">Support</h1>
         <input type="text" placeholder={message} className="message-box"></input>
      
      <form >
        <div className="supportForm">
            <div className="support-input">
              <label htmlFor="name">Name: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="inputBox"
                placeholder="Name"
              />
            </div>
            <div className="support-input">
              <label htmlFor="email">Email: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="inputBox"
                placeholder="Email"
              />
            </div>
            <button className="send">Send</button>
          </div>
        
      </form>
    </div>
  );
}