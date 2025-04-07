import React from "react";
import list from "../data";
import { useNavigate } from 'react-router-dom';
import "../css/Subscription.css";

const SubscriptionList = () => {
  
  const navigate = useNavigate();
  // Function to handle subscription
  function subscribe(item) {
    localStorage.setItem('subscription', true);
    navigate('/'); // Redirect to main application
  }

  return (
    <>
      <div className="subscription-header">Search Results</div>

      <div className="subscription-container">
        <div className="row">
          {list.map((item) => (
            <div className="col" key={item.id}>
              <div className="subscription-item">
                <p className="subscription-service">{item.service}</p>
                <img src={item.img} alt="streamlist-logo" width="300" height="300" className="subscription-logo" />
                <h3>{item.serviceInfo}</h3>
                <p className="price">${item.price}</p>
                <button onClick={() => subscribe(item)} className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionList;