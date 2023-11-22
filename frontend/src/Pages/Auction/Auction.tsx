import React, { useState, useEffect } from 'react';
import './Auction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface AuctionItem {
  post_id: number;
  name: string;
  amount: string;
  price: string;
  total_bidding_placed: number;
  start_time: string;
  end_time: string;
  current_time: string;
  items: { type: string; description: string }[];
}

const Auction: React.FC = () => {
  const [auctionProducts, setAuctionProducts] = useState<AuctionItem[]>([]);
  const [resizedImages, setResizedImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchAuctionProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/register_add_auction_products/');
        setAuctionProducts(response.data);

        // Fetch images by post_id
        const imageResponses = await Promise.all(
          response.data.map(async (product: AuctionItem) => {
            // Fetch image
            const imageResponse = await axios.post(
              'http://127.0.0.1:8000/login_auction_images/',
              {
                post_id: product.post_id,
              },
              {
                responseType: 'arraybuffer', // This is important for binary data
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

    fetchAuctionProducts();
  }, []);

  const increasePrice = (post_id: number) => {
    // Implement your logic for increasing price
  };

  return (
    <div className="amazon-container" >
      {/* Sidebar */}
      <div className="sidebar">
      <Link to="/postcreate" type="button" className="btnn">
          Create New Post
      </Link>
        
  
        <div className="sort-options">
          <p>Sort Options:</p>
          <button className="sidebar-button">Price Low to High</button>
          <button className="sidebar-button">Price High to Low</button>
          <button className="sidebar-button">Name A-Z</button>
          <button className="sidebar-button">Name Z-A</button>
        </div>
      </div>

      <div className="amazon-products" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        {auctionProducts.map((product, index) => {
          // Calculate remaining time in milliseconds
          const remainingTime = new Date(product.end_time).getTime() - new Date().getTime();
          console.log(remainingTime);

          // Convert milliseconds to hours
          const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));

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
              <h6>Total Bidding Placed: {product.total_bidding_placed}</h6>
              <h6>
                {remainingHours > 0
                  ? `${remainingHours} hours remaining`
                  : 'Auction has ended'}
              </h6>
              <div className = "btnn">
              <Link to="/postdetails" type="button" className="btnn">
              Place your bidding
              </Link>
              
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Auction;
