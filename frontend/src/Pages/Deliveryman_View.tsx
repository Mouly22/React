import React, { useState } from 'react';
import './delivery.css';

interface PostProps {
  postId: number;
  username: string;
  productName: string;
  location: string;
  quantity: number;
  deliveryMoney: number;
}

const Post: React.FC<PostProps> = ({ postId, username, productName, location, quantity, deliveryMoney }) => {
  const [buttonStatus, setButtonStatus] = useState('Accept');
  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleAccept = () => {
    setShowForm(true);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Date: ${date}, Status: ${status}`);
    setShowForm(false);
    setButtonStatus('In Process');
    if (status === 'Delivered') {
      setButtonStatus('Delivered');
    }
  };

  return (
    <div className="postContainer">
      <div className="post">
        <p className="postId">Post ID: {postId}</p>
        <p className="username">Posted by: {username}</p>
        <h2 className="productName">{productName}</h2>
        <p className="location">{location}</p>
        <p className="quantity">Quantity: {quantity}</p>
        <p className="deliveryMoney">Delivery Money: {deliveryMoney}</p>
        <button className={buttonStatus === 'Accept' ? "acceptButton" : buttonStatus === 'In Process' ? "inProcessButton" : "deliveredButton"} onClick={handleAccept}>
          {buttonStatus}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Date:
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
          </label>
          <div>
            <p>Status:</p>
            <button type="button" className={status === 'Accepted' ? "statusButtonActive" : "statusButton"} onClick={() => setStatus('Accepted')}>Accepted</button>
            <button type="button" className={status === 'Received From Farmer' ? "statusButtonActive" : "statusButton"} onClick={() => setStatus('Received From Farmer')}>Received From Farmer</button>
            <button type="button" className={status === 'On The Way' ? "statusButtonActive" : "statusButton"} onClick={() => setStatus('On The Way')}>On The Way</button>
            <button type="button" className={status === 'Delivered' ? "statusButtonActive" : "statusButton"} onClick={() => setStatus('Delivered')}>Delivered</button>
          </div>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};

const App = () => {
  const data = [
    { postId: 1, username: 'User1', productName: 'Potato', location: 'Cumilla', quantity: 10, deliveryMoney: 50 },
    { postId: 2, username: 'User2', productName: 'Tomato', location: 'Dhaka', quantity: 20, deliveryMoney: 60 },
    { postId: 3, username: 'User3', productName: 'Cucumber', location: 'Chittagong', quantity: 30, deliveryMoney: 70 },
    { postId: 4, username: 'User4', productName: 'Carrot', location: 'Sylhet', quantity: 40, deliveryMoney: 80 },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <Post key={index} postId={item.postId} username={item.username} productName={item.productName} location={item.location} quantity={item.quantity} deliveryMoney={item.deliveryMoney} />
      ))}
    </div>
  );
};

export default App;
