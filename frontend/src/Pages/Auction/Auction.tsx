import React, { useState, useEffect } from 'react';
import './Auction.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Category from './Category';
import Price from './Price';
import ASidebar from './ASidebar';

interface AuctionItem {
  post_id: number;
  name: string;
  amount: string;
  price: string;
  total_bidding_placed: number;
  start_time: string;
  end_time: string;
  current_time: string;
  posted_by:string;
  items: { type: string; description: string }[];
}

const Auction: React.FC = () => {
  const [auctionProducts, setAuctionProducts] = useState<AuctionItem[]>([]);
  const [resizedImages, setResizedImages] = useState<string[]>([]);
  const userId = localStorage.getItem('userid');

  useEffect(() => {
    const fetchAuctionProducts = async () => {
      const search_word = localStorage.getItem("search_word") || "";
      const type = localStorage.getItem("type") || "";
      const price_range = localStorage.getItem("price_range") || "0,9999999";
      
      const requestData = {
        search_word: search_word,
        type: type,
        price_range: price_range
      };
      
      try {
        const response = await axios.post('http://127.0.0.1:8000/search_auction_products/', requestData);
        setAuctionProducts(response.data);
        console.log(response.data);

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

    fetchAuctionProducts();
  }, []);

  const handlePlaceBidding = (post_id: number,name:string,amount:any,price:any,userid:string) => {
    // Check if remainingHours > 0
    const remainingTime = new Date(auctionProducts.find(p => p.post_id === post_id)?.end_time || '').getTime() - new Date().getTime();
    const remainingHours = Math.floor(remainingTime / (1000 * 60 * 60));

    if (remainingHours > 0) {
      // Navigate to details page
      window.location.href = `/postdetails/${post_id}`;
    } else {
      // Call function to post post_id to the specified URLs
      postToUrls(post_id,name,amount,price,userid);
    }
  };

  const postToUrls = async (post_id: number, name: string, amount: any, price: any, userid: string) => {
    try {
      // Post to http://127.0.0.1:8000/login_latest_bidding/
      const requestData_Final = {
        post_id: post_id,
      };
  
      const response1 = await axios.post('http://127.0.0.1:8000/login_latest_bidding/', requestData_Final);
  
      // Check if last_bidder data is available
      if (response1.data.user_data && response1.data.user_data["last_bidder"] && response1.data.user_data["last_bidder"].length !== 0) {
        // Assuming last_bidder is a key in user_data that holds an array
        const businessmen_id = response1.data.user_data["last_bidder"];
        console.log(businessmen_id);
        const requestData_Final_Pending = {
          post_id: post_id,
          name: name,
          amount: amount,
          price: price,
          businessman_userid: businessmen_id,
          farmer_userid: userid,
        };
  
        const response2 = await axios.post('http://127.0.0.1:8000/register_pending_payment/', requestData_Final_Pending);
  
        // Now you can use businessmen_id as needed
        // ...
      } else {
        // No last_bidder data or it's an empty array
        // Handle accordingly
        console.error('No last_bidder data or it\'s an empty array');
      }
  
      // Post to http://127.0.0.1:8000/delete_auction_products/
      const response3 = await axios.post('http://127.0.0.1:8000/delete_auction_products/', { post_id });
  
      // Post to http://127.0.0.1:8000/delete_latest_bidding/
      const response4 = await axios.post('http://127.0.0.1:8000/delete_latest_bidding/', { post_id });
  
      window.location.reload();
  
      // Add additional logic if needed
    } catch (error) {
      console.error('Error posting to URLs:', error);
    }
  };
  return (
    <div className="amazon-container">
      {/* Sidebar */}
      <ASidebar />

      <div className="amazon-products" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
        {auctionProducts.length === 0 ? (
          <p>No Product found</p>
        ) : (
          auctionProducts.map((product, index) => {
            const remainingTime = new Date(product.end_time).getTime() - new Date().getTime();
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
                  {remainingHours > 0 ? `${remainingHours} hours remaining` : 'Auction has ended'}
                </h6>
                <div>
                  <button
                    type="button"
                    className="btnn"
                    onClick={() => handlePlaceBidding(product.post_id,product.name,product.amount,product.price,product.posted_by)}
                  >
                    Place your bidding
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Auction;
