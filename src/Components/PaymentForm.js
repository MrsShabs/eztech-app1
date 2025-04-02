import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add import for navigation
import "../css/PaymentForm.css"

export const PaymentForm = () => {

  // state to save the card data
  const [cardData, setCardData] = useState({
    cardHolderName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''   
  });

  // Initialize navigate function
  const navigate = useNavigate(); 

  // format cardnumber to 1234 5678 9012 3456
  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '') // Remove non-digit characters
                .replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
  };

  // format exp date mm/yy
  const formatExpDate = (value) => {
    return value
      .replace(/\D/g, '') // Remove non-digit characters
      .replace(/(\d{2})(\d{1,2})/, '$1/$2') // Add slash after the first two digits
      .slice(0, 5); // Limit to 5 characters (MM/YY)
  };

  // handleChanges - save the values to state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData(prevState => ({
      ...prevState, 
      [name]: name === 'cardNumber' ? formatCardNumber(value) : 
              name === 'expDate' ? formatExpDate(value) : value, // Fix: Properly format expiration date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      cardHolderName: cardData.cardHolderName,
      cardNumber: cardData.cardNumber,
      expDate: cardData.expDate,
      cvv: cardData.cvv,
    };
    localStorage.setItem('paymentData', JSON.stringify(formData)); // Save to local storage
    alert('Payment information saved successfully!');
    navigate('/cart'); // Redirect to cart page
  };

  return (
    <div className="payment-form-container">
      <h2 className="payment-form-title">Card details</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-container">
          <div>
            <label className="payment-form-label"htmlFor="cardHolderName">Name:<span style={{ color: "red" }}>*</span></label>
            <input
              className="payment-form-input"
              type="text"
              id="cardHolderName"
              name="cardHolderName" // Fix: Add name attribute for binding
              placeholder="Cardholder's Name"
              value={cardData.cardHolderName} // Fix: Bind value to state
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="payment-form-label" htmlFor="cardNumber">Number:<span style={{ color: "red" }}>*</span></label>
            <input
              className="payment-form-input"
              type="text"
              id="cardNumber"
              name="cardNumber" // Fix: Add name attribute for binding
              placeholder="Card Number"
              value={cardData.cardNumber} // Fix: Bind value to state
              onChange={handleChange}
              required
            />
          </div>
          <div className="d-flex">
          <div>
            <label className="payment-form-label" htmlFor="expDate">EXP:<span style={{ color: "red" }}>*</span></label>
            <input
              className="exp-date-input"
              type="text"
              id="expDate"
              name="expDate" // Fix: Add name attribute for binding
              placeholder="MM/YY"
              value={cardData.expDate} // Fix: Bind value to state
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="payment-form-label" htmlFor="cvv">CVV:<span style={{ color: "red" }}>*</span></label>
            <input
              className="cvv-input"
              type="text"
              id="cvv"
              name="cvv" // Fix: Add name attribute for binding
              placeholder="CVV"
              value={cardData.cvv} // Fix: Bind value to state
              onChange={handleChange}
              required
            />
          </div>
          </div>
        </div> 
        <button className="payment-button" type="submit">Save</button> {/* Fix: Add type="submit" */}
      </form>
    </div>
  );
};

export default PaymentForm;