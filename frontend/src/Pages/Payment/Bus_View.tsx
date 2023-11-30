import React, { useState, useEffect } from 'react';
import '../Auction/Auction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface AuctionItem {
  post_id: number;
  name: string;
  amount: string;
  price: string;
  businessman_userid: string;
  farmer_userid: string;
}

const BusView: React.FC = () => {
  const [auctionProducts, setAuctionProducts] = useState<AuctionItem[]>([]);
  const [resizedImages, setResizedImages] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/register_pending_payment/');
      setAuctionProducts(response.data);

      const imageResponses = await Promise.all(
        response.data.map(async (product: AuctionItem) => {
          const imageResponse = await axios.post(
            'http://127.0.0.1:8000/login_auction_images/',
            {
              post_id: product.post_id,
            },
            {
              responseType: 'arraybuffer',
            }
          );

          const base64 = btoa(
            new Uint8Array(imageResponse.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ''
            )
          );

          return `data:${imageResponse.headers['content-type']};base64,${base64}`;
        })
      );
      setResizedImages(imageResponses);
    } catch (error) {
      console.error('Error fetching auction products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="amazon-container" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <div className="amazon-products">
        {auctionProducts.map((product, index) => {
          return (
            <div key={product.post_id} className="product-card">
              {resizedImages[index] && (
                <img
                  src={resizedImages[index]}
                  alt={product.name}
                  style={{ width: '200px', height: '150px' }}
                />
              )}
              <h3>{product.name}</h3>
              <h6>Amount: {product.amount} kg</h6>
              <h6>Price: {product.price} Taka only</h6>
              <h6>Businessman: {product.businessman_userid}</h6>
              <br />

              <div>
                <Link to={`/payview/${product.post_id}`} className='btnn'>
                  Complete your Payment
                </Link>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BusView;
