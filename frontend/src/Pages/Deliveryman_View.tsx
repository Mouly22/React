import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


interface PostProps {
  pending_delivery_id: number;
  deliveryman_userid: string;
  delivery_state: string;
  transaction_id: string;
  amount: string;
  product_id: number;
  name: string;
  location: string;
}

const Post: React.FC<PostProps> = ({ pending_delivery_id, deliveryman_userid, delivery_state, transaction_id, amount, product_id, name, location }) => {
  const [buttonStatus, setButtonStatus] = useState(delivery_state);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/get_deilvery_bounty_booked/', {
          pending_delivery_id: userId,
        });
        // Assuming response.data is an array of delivery items
        const deliveryItem = response.data.find((item: PostProps) => item.pending_delivery_id === pending_delivery_id);
        if (deliveryItem) {
          setButtonStatus(deliveryItem.delivery_state);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const storedUserId = localStorage.getItem('userid');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, [userId, pending_delivery_id]);

  const handleAccept = () => {
    setShowForm(true);
  };

  const handleStatusChange = async (newStatus: string) => {
    try {
      console.log(product_id,newStatus);
      await axios.post('http://127.0.0.1:8000/get_deilvery_bounty_booked_delivery_state_update/', {
        post_id: product_id,
        delivery_state: newStatus,
      });

      setStatus(newStatus);
      setShowForm(false);

      if (newStatus === 'Delivered') {
        setButtonStatus('Delivered');
        const responsefarmerdata = await axios.post('http://127.0.0.1:8000/get_pending_farmer_payment_data/', {
          product_id: product_id,
        });
        console.log(responsefarmerdata.data.userid);
// pending on delivery delete
await axios.post('http://127.0.0.1:8000/delete_pending_delivery_products/', {
  product_id: product_id,

});
//pending farmer payment delete
await axios.post('http://127.0.0.1:8000/delete_pending_farmer_payment/', {
  product_id: product_id,

});
//bouties booked delete
await axios.post('http://127.0.0.1:8000/delete_deilvery_bounty_booked/', {
  product_id: product_id,

});
//fermer's balance update
await axios.post('http://127.0.0.1:8000/update_farmer_wallet/', {
  userid: responsefarmerdata.data.userid,
  price: responsefarmerdata.data.price,

});
      } else {
        setButtonStatus('In Process');
      }
    } catch (error) {
      console.error('Error updating delivery state:', error);
    }
  };

  return (
    <>
    <br/>

    <div className="postContainer">
      
      <div className="post">
        <p className="pendingDeliveryId"><strong>Pending Delivery ID:</strong><> </>{pending_delivery_id} </p>
        <p className="deliverymanUserid"><strong>Deliveryman User ID:</strong> {deliveryman_userid}</p>
        <p className="deliveryState"><strong>Delivery State:</strong> {delivery_state}</p>
        
        <h3 className="productName">{name}</h3>
        <p className="location"><strong> Location: {location}</strong></p>
        <p className="amount"><strong>Amount:</strong> {amount} KG</p>
        <button className={buttonStatus === 'Accepted' ? 'acceptButton' : buttonStatus === 'In Process' ? 'inProcessButton' : 'deliveredButton'} onClick={handleAccept}>
          {buttonStatus}
        </button>
      </div>
      {showForm && (
        <div className="form">
          <div>
            <p>Status:</p>
            <button type="button" className={status === 'Accepted' ? 'statusButtonActive' : 'statusButton'} onClick={() => handleStatusChange('Accepted')}>
              Accepted
            </button>
            <button
              type="button"
              className={status === 'Received From Farmer' ? 'statusButtonActive' : 'statusButton'}
              onClick={() => handleStatusChange('Received From Farmer')}
            >
              Received From Farmer
            </button>
            <button type="button" className={status === 'On The Way' ? 'statusButtonActive' : 'statusButton'} onClick={() => handleStatusChange('On The Way')}>
              On The Way
            </button>
            <button type="button" className={status === 'Delivered' ? 'statusButtonActive' : 'statusButton'} onClick={() => handleStatusChange('Delivered')}>
              Delivered
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

const Delivery = () => {
  const [data, setData] = useState<PostProps[]>([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/get_deilvery_bounty_booked/', {
          pending_delivery_id: userId,
        });
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
  }, [userId]);

  return (
    <div>

      <br/>
      <h4>Find Jobs here: <Link to={`/delivery`} className='btnn'> All Jobs </Link></h4>
      <br/>
      <h5> Update your delivery status to let the cumtomers know:</h5>
      
      {data.map((item, index) => (
        <Post
          key={index}
          pending_delivery_id={item.pending_delivery_id}
          deliveryman_userid={item.deliveryman_userid}
          delivery_state={item.delivery_state}
          transaction_id={item.transaction_id}
          amount={item.amount}
          product_id={item.product_id}
          name={item.name}
          location={item.location}
        />
      ))}
    </div>
  );
};

export default Delivery;
