import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Delivery.css';

interface PostProps {
  pending_payment_id: number;
  userid: string;
  transaction_id: string;
  amount: string;
  product_id: number;
  name: string;
  location: string;
  deliveryman_userid:string;
}

const Posts: React.FC<PostProps> = ({ pending_payment_id, userid, transaction_id, amount, product_id, name, location,deliveryman_userid }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculateDeliveryBounty = (amount: string): number => {
    const numericAmount = parseFloat(amount);

    if (numericAmount < 50) {
      return 200;
    } else if (numericAmount >= 50 && numericAmount < 300) {
      return 400;
    } else {
      return 600;
    }
  };

  const handleAccept = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/register_deilvery_bounty_booked/', {
        deliveryman_userid: deliveryman_userid,
        delivery_state: 'Accepted',
        transaction_id:transaction_id,
        amount:amount,
        product_id:product_id,
        name:name,
        location:location,
      });

      // Handle the response as needed
      console.log(response.data);

      // Update the state to reflect that the request has been submitted
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error accepting delivery:', error);
    }
  };

  return (
    <div className="postContainer">
      <div className="post">
        <h2 className="productName">{name}</h2>
        <p className="location">Location: {location}</p>
        <p className="amount">Amount: {amount}</p>
        <p className="deliveryBounty">Delivery Bounty: {calculateDeliveryBounty(amount)}</p>
        <button className={isSubmitted ? "submitButton" : "acceptButton"} onClick={handleAccept} disabled={isSubmitted}>
          {isSubmitted ? "Accepted" : "Accept"}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState<PostProps[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/register_deilvery_bounty/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const storedUserId = localStorage.getItem('userid');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const filteredData = data.filter(item =>
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by location..."
        onChange={event => setSearchTerm(event.target.value)}
      />
      {userId && <p>User ID: {userId}</p>}
      {filteredData.map((item, index) => (
        <Posts key={index} pending_payment_id={item.pending_payment_id} userid={item.userid} transaction_id={item.transaction_id} amount={item.amount} product_id={item.product_id} name={item.name} location={item.location} deliveryman_userid={userId}/>
      ))}
    </div>
  );
};

export default App;
