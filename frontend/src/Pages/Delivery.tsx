import React, { useState, useEffect } from 'react';
import './delivery.css';

interface PostProps {
  postId: number;
  productName: string;
  location: string;
  quantity: number;
  deliveryMoney: number;
}

const Post: React.FC<PostProps> = ({ postId, productName, location, quantity, deliveryMoney }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAccept = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="postContainer">
      <div className="post">
        <p className="postId">Post ID: {postId}</p>
        <h2 className="productName">{productName}</h2>
        <p className="location">{location}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <p className="deliveryMoney">Delivery Money: {deliveryMoney}</p>
        <button className={isSubmitted ? "submitButton" : "acceptButton"} onClick={handleAccept}>
          Accept
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const data = [
    { postId: 1, productName: 'Potato', location: 'Cumilla', quantity: 10, deliveryMoney: 50 },
    { postId: 2, productName: 'Tomato', location: 'Dhaka', quantity: 20, deliveryMoney: 60 },
    { postId: 3, productName: 'Cucumber', location: 'Chittagong', quantity: 30, deliveryMoney: 70 },
    { postId: 4, productName: 'Carrot', location: 'Sylhet', quantity: 40, deliveryMoney: 80 },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
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
        <Post key={index} postId={item.postId} productName={item.productName} location={item.location} quantity={item.quantity} deliveryMoney={item.deliveryMoney} />
      ))}
    </div>
  );
};

export default App;
