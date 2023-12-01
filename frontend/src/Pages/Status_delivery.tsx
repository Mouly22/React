import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Status_delivery.css';

const StatusDelivery: React.FC = () => {
  const { post_id } = useParams<{ post_id: string }>();
  const [deliveryState, setDeliveryState] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/get_deilvery_bounty_booked_delivery_state_check/', {
          post_id,
        });
        setDeliveryState(response.data.delivery_state || 'Finding delivery man');
      } catch (error) {
        console.error('Error fetching delivery state:', error);
        setDeliveryState('Finding delivery man');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [post_id]);

  return (
    <div className="card">
      <div className="title">Delivery Status</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="status">
          <span>{` ${deliveryState}`}</span>
        </div>
      )}
    </div>
  );
};

export default StatusDelivery;
