// Import necessary packages and styles
import React, { useState } from "react";
import './PayView.css';

const PayView: React.FC<{}> = () => {
  const orderData = {
    orderId: '34234223423',
    productName: 'Potato',
    productPrice: 6000,
    shipping: 600,
  };

  const [paymentInput, setPaymentInput] = useState<number | string>('');
  const [transactionIdInput, setTransactionIdInput] = useState<string>('');
  const [showCelebration, setShowCelebration] = useState<boolean>(false);

  const total = orderData.productPrice + orderData.shipping;

  const handlePaymentSubmit = () => {
    // Handle payment submission logic here
    console.log('Payment Input:', paymentInput);
    console.log('Transaction ID Input:', transactionIdInput);

    // Simulate celebration after submission
    setShowCelebration(true);

    // Reset the celebration after a certain duration (1.5 seconds in this case)
    setTimeout(() => {
      setShowCelebration(false);
    }, 1500);

    // Add additional logic as needed
  };

  return (
    <div className={`card ${showCelebration ? 'celebration' : ''}`}>
      <div className="title">Payment Form</div>
      
      <div className="row">
        <span className="heading"><strong>Order No.</strong></span><br />
        <span className="details">{orderData.orderId}</span>
      </div>
      <br/>

      <span className="heading"><strong>Payment Details.</strong></span>
      <div className="pricing">
        <div className="row">
          <div className="col-9">
            <span className="name">{orderData.productName}</span>
          </div>
          <div className="col-3">
            <span className="price">{orderData.productPrice} ৳</span>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <span className="name">Shipping</span>
          </div>
          <div className="col-3">
            <span className="price">{orderData.shipping} ৳</span>
          </div>
        </div>
      </div>
      <div className="total">
        <div className="row">
          <div className="col-9"></div>
          <div className="col-3"><big>{total} ৳</big></div>
        </div>
      </div>

      <div className="payment-input-box">
        <label htmlFor="paymentInput">Enter Payment:</label>
        <input
          type="number"
          id="paymentInput"
          value={paymentInput}
          onChange={(e) => setPaymentInput(e.target.value)}
        />
      </div>

      <div className="transaction-id-input-box">
        <label htmlFor="transactionIdInput">Enter Transaction ID:</label>
        <input
          type="text"
          id="transactionIdInput"
          value={transactionIdInput}
          onChange={(e) => setTransactionIdInput(e.target.value)}
        />
      </div>

      <button className="submit-button" onClick={handlePaymentSubmit}>
        {showCelebration ? (
          <div className="tick-mark">&#10004;</div>
        ) : (
          'Submit Payment'
        )}
      </button>
    </div>
  );
};

export default PayView;



