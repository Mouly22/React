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
    posted_by: string;
  };
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [auctionProduct, setAuctionProduct] = useState<AuctionItem | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [bidAmount, setBidAmount] = useState<number>(0); // State for the bid amount
  const userId = localStorage.getItem('userid');
  const [averageStar, setAverageStar] = useState<number | null>(null); // State for average star

  const handleBidSubmit = async () => {
    try {
      // Fetch data by posting 'post_id' to http://127.0.0.1:8000/login_latest_bidding/
      const bidDataResponse = await axios.post('http://127.0.0.1:8000/login_latest_bidding/', {
        post_id: postId,
      });

      const { post_id, max_price, current_price, last_bidder, bidding_ended } = bidDataResponse.data.user_data;
      console.log(current_price+bidAmount,max_price);
      // Compare if (current_price + bidAmount) < max_price
      if (current_price + bidAmount < max_price) {
        console.log("YO")
        // Make a post request to http://127.0.0.1:8000/edit_latest_bidding_ending/
        await axios.post('http://127.0.0.1:8000/edit_auction_products_current_price/', {
          post_id: post_id,
          price: current_price + bidAmount,
          total_bidding_placed: auctionProduct.user_data.bidding_placed + 1,
        });

        // Make another post request to http://127.0.0.1:8000/login_latest_bidding/
        await axios.post('http://127.0.0.1:8000/edit_latest_bidding/', {
          post_id:post_id,
          max_price:max_price,
          current_price: current_price + bidAmount,
          last_bidder: userId,
          bidding_ended: false,
        });
        window.location.reload();
        // Additional logic if needed
      } else {
        // Handle the case where the bid amount exceeds the maximum price
        console.log('Bid amount exceeds maximum price.');
        alert("Amount exceeds maximum price.");
        console.log(current_price+bidAmount)

      }
    } catch (error) {
      console.error('Error submitting bid:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/check_auction_products/', {
          post_id: postId,
        });

        setAuctionProduct(response.data);
        console.log(response.data.user_data.posted_by)
        const starResponse = await axios.post('http://127.0.0.1:8000/get_farmer_review/', {
          userid: response.data.user_data.posted_by || '',
        });
        setAverageStar(starResponse.data.average_star);
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
                  <strong>End Time:</strong> {auctionProduct.user_data.end_time}
                </p>
                <p>
                  <strong>Posted by:</strong> {auctionProduct.user_data.posted_by}
                </p>
                <p>
                  <strong>Ratting of the Farmer:</strong> {averageStar}
                </p>
                <ul>
                  {auctionProduct.user_data.description.map((desc, index) => (
                    <li key={index}>
                      <strong>{Object.keys(desc)[0]}:</strong> {Object.values(desc)[0]}
                    </li>
                  ))}
                </ul>
                <h4>Place your Bidding:</h4>
                <div className='bid-section'>
                  <input
                    type="number"
                    placeholder="Enter Bid Amount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(parseInt(e.target.value))}
                  />
                  <button onClick={handleBidSubmit}>Submit Bid</button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;