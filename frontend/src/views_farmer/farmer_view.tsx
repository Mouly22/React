import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './farmer_view.css';

interface Wallet {
  userid: string;
  total_money: string;
}

const Farmer_Page: React.FC = () => {
  const [userid, setUserid] = useState<string>('');
  const [userType, setUserType] = useState<string>('');
  const [auctionProducts, setAuctionProducts] = useState<Wallet | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserId = localStorage.getItem('userid');
        const storedUserType = localStorage.getItem('user_type');
        setUserid(storedUserId || '');
        setUserType(storedUserType || '');

        const response = await axios.post('http://127.0.0.1:8000/get_farmer_wallet/', {
          userid: storedUserId,
        });

        setAuctionProducts(response.data);
      } catch (error) {
        console.error('Error fetching auction products:', error);
      }
    };

    fetchData();
  }, []); // Add an empty dependency array to run the effect only once when the component mounts

  return (
    <div className="containers">
      <div className="info-boxs">
        <h2 className="headers">Welcome, Farmer</h2>
        <p>User ID: {userid}</p>
        <p>User Type: {userType}</p>
        {auctionProducts ? (
          <>
            <p className="wallet-balance: ">Wallet Balance: {auctionProducts.total_money}</p>
            
          </>
        ) : (
          <p className="error-messages">Error fetching wallet information</p>
        )}
      </div>
    </div>
  );
};


export default Farmer_Page;
