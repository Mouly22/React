import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetails.css'; // Replace with your CSS file

interface AuctionItem {
  name: string;
  items: { type: string; description: string }[];
  user_data: {
    post_id: number;
    name: string;
    amount: number;
    price: number;
    bidding_placed: number;
    start_time: string;
    end_time: string;
    current_time: string;
    description: { [key: string]: string }[];
  };
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [auctionProduct, setAuctionProduct] = useState<AuctionItem | null>(null);
  const [image, setImage] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/check_auction_products/', {
          post_id: postId,
        });

        setAuctionProduct(response.data);

        // Fetch image
        const imageResponse = await axios.post(
          'http://127.0.0.1:8000/login_auction_images/',
          {
            post_id: response.data.user_data.post_id,
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

        setImage(`data:${imageResponse.headers['content-type']};base64,${base64}`);
      } catch (error) {
        console.error('Error fetching auction product:', error);
      }
    };

    fetchData();
  }, [postId]);

  

  return (
    <div className="post-details-container" style={{ maxHeight: '90vh', overflowY: 'auto' }}> 
      {auctionProduct && (
        <>
          <h2>{auctionProduct.name}</h2>
          <div className="image-gallery">
            <img src={image} alt="Product Image" />
          </div>
          <div>
            
            <ul>
           
              {auctionProduct.items &&
                auctionProduct.items
                  .filter((item) => item.type !== 'image')
                  .map((item, index) => (
                    <li key={index}>
                      <strong>{item.type}:</strong> {item.description}
                    </li>
                  ))}
            </ul>
          </div>
          <div className="details-section">
         
            <h3>Description:</h3>
            {auctionProduct.user_data && (
              <>
              
                <p>
                  <h4><strong>Name:</strong> {auctionProduct.user_data.name}</h4>
                </p>
                <p>
                  <strong>Amount:</strong> {auctionProduct.user_data.amount} kg
                </p>
                <p>
                  <strong>Price:</strong> {auctionProduct.user_data.price} Taka only
                </p>
                <p>
                  <strong>Total Bidding Placed:</strong> {auctionProduct.user_data.bidding_placed}
                </p>
                <p>
                  <strong>Start Time:</strong> {auctionProduct.user_data.start_time}
                </p>
                <p>
                  <strong>End Time:</strong> {auctionProduct.user_data.end_time}
                </p>
                <p>
                  <strong>Current Time:</strong> {auctionProduct.user_data.current_time}
                </p>
                <ul>
                  {auctionProduct.user_data.description.map((desc, index) => (
                    <li key={index}>
                      <strong>{Object.keys(desc)[0]}:</strong> {Object.values(desc)[0]}
                    </li>
                  ))}
                </ul>
                <h4>Place your Bidding:</h4>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;

