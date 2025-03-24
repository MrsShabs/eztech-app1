import React from "react";
import "../css/Support.css";

export default function Support() {

    const message = "Please write your message here:";
  return (
    <>
        <h1>Support</h1>
        <div className="message-box">
          <p> {message}</p>
        </div>

      <form >
        <div className="supportForm">
            <div>
              <label htmlFor="name">
                Name: <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="inputBox"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email">
                Email: <span style={{ color: "red" }}>*</span>
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
    </>
  );
}