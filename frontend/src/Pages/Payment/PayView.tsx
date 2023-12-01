import React, { useState, useEffect } from "react";
import './PayView.css';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const PayView: React.FC = () => {
  const { post_id } = useParams<{ post_id: string }>();
  const [orderData, setOrderData] = useState<any>(null);
  const [paymentInput, setPaymentInput] = useState<number | string>('');
  const [transactionIdInput, setTransactionIdInput] = useState<string>('');
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const [deliveryAmount, setDeliveryAmount] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/get_businessman_pending_payment_post_details/', {
          post_id,
        });
        setOrderData(response.data);
        const amount = parseFloat(response.data.amount);
        if (amount < 50) {
          setDeliveryAmount(200);
        } else if (amount > 50 && amount < 300) {
          setDeliveryAmount(400);
        } else {
          setDeliveryAmount(600);
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchData();
  }, [post_id]);

  const total = orderData ? orderData.amount + orderData.deliveryMoney : 0;

  const handlePaymentSubmit = async () => {
    try {
      // Make a post request to register pending farmer payment
      console.log(orderData.farmer_userid)
      const responsefarmer = await axios.post('http://127.0.0.1:8000/login_farmer/', {
        userid: orderData.farmer_userid,
      });
      console.log(responsefarmer.data.user_data.address);
      await axios.post('http://127.0.0.1:8000/register_pending_farmer_payment/', {
        userid: orderData.farmer_userid,
        transaction_id: transactionIdInput,
        amount: orderData.amount,
        product_id: post_id,
        name: orderData.name,
        location: responsefarmer.data.user_data.address,
      });
      await axios.post('http://127.0.0.1:8000/delete_pending_payment/', {
        post_id: post_id,
      });
      await axios.post('http://127.0.0.1:8000/register_pending_delivery_products/', {
        post_id: orderData.post_id,
        name: orderData.name,
        amount: orderData.amount,
        price: orderData.price,
        businessman_userid: orderData.businessman_userid,
        farmer_userid: orderData.farmer_userid,

        location: responsefarmer.data.user_data.address,
      });
      await axios.post('http://127.0.0.1:8000/register_deilvery_bounty/', {
        userid: orderData.farmer_userid,
        transaction_id: transactionIdInput,
        amount: orderData.amount,
        product_id: post_id,
        name: orderData.name,
        location: responsefarmer.data.user_data.address,
      });
      navigate('/businessman');

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
    } catch (error) {
      console.error('Error submitting payment:', error);
    }
  };

  return (
    <div className={`card ${showCelebration ? 'celebration' : ''}`}>
      <div className="title">Payment Form</div>

      {orderData ? (
        <div>
          <div className="row">
            <span className="heading"><strong>Post ID:</strong><> </>{orderData.post_id}</span>
          </div>
          <div className="row">
            <span className="heading"><strong>Product Name:</strong><>  </>{orderData.name}</span>
          </div>
          <div className="row">
            <span className="heading"><strong>Amount:</strong><>   </>{orderData.amount} Kg</span>
          </div>
          <div className="row">
            <span className="heading"><strong>Product Price:</strong><> </>{orderData.price}</span>
          </div>
          <div className="row">
            <span className="heading"><strong>Delivery Price:</strong><> </> {deliveryAmount}</span><br />
           
          </div>
          <br/>

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
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PayView;
