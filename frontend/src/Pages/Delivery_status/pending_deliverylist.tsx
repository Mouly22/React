// AllIncomingDeliveries.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllIncomingDeliveries.css';
import { useParams, useNavigate } from "react-router-dom";

interface DeliveryItem {
  post_id: number;
  name: string;
  amount: string;
  price: string;
  businessman_userid: string;
  farmer_userid: string;
  location: string;
}

const AllIncomingDeliveries: React.FC = () => {
  const [deliveryItems, setDeliveryItems] = useState<DeliveryItem[]>([]);
  const userId = localStorage.getItem('userid');
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/get_pending_delivery_products/', {
          userid: userId,
        });
        setDeliveryItems(response.data);
      } catch (error) {
        console.error('Error fetching delivery items:', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleButtonClick = (postId: number) => {
    console.log(`Button clicked for Post ID: ${postId}`);
    navigateToStatusDelivery(postId);
  };

  const navigateToStatusDelivery = (postId: number) => {
    console.log(`Navigating to /status_delivery/${postId}`);
    console.log(postId);
    navigate('/status_delivery/' + postId);
  };

  return (
    <div className="con center">
      <div className="delivery-table">
        <table>
          <thead>
            <h5><strong>Delivery:</strong></h5>
        
            <tr>
              <th>Post ID</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Businessman</th>
              <th>Farmer</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveryItems.map((item) => (
              <tr key={item.post_id}>
                <td>{item.post_id}</td>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>{item.businessman_userid}</td>
                <td>{item.farmer_userid}</td>
                <td>{item.location}</td>
                <td>
                  <div className = 'btnn' onClick={() => handleButtonClick(item.post_id)}>View Details
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllIncomingDeliveries;



