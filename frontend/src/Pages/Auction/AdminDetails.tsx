import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const AdminDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [auctionProduct, setAuctionProduct] = useState<AuctionItem | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [bidAmount, setBidAmount] = useState<number>(0); // State for the bid amount
  const userId = localStorage.getItem('userid');

  const handleBidSubmit = async () => {
    // Handle bidding logic (UI-only)
    console.log('Submit Bid:', bidAmount);
  };

  useEffect(() => {
    // Simulated data for demonstration
    const demoAuctionProduct: AuctionItem = {
      name: 'Product 1',
      items: [{ type: 'Type 1', description: 'Description 1' }],
      user_data: {
        post_id: 1,
        name: 'Product 1',
        amount: 10,
        price: 100,
        bidding_placed: 5,
        start_time: '2023-01-01T00:00:00Z',
        end_time: '2023-01-02T00:00:00Z',
        current_time: '2023-01-01T12:00:00Z',
        description: [{ key: 'Key 1', value: 'Value 1' }],
      },
    };

    setAuctionProduct(demoAuctionProduct);
    // Simulated image data for demonstration
    const demoImage: string = 'image1.jpg'; // Replace with actual image URL
    setImage(demoImage);
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
                <h4>Set a Max Bidding Amount for this Product:</h4>
                <div className='bid-section'>
                  <input
                    type="number"
                    placeholder="Enter Amount.."
                    value={bidAmount}
                    onChange={(e) => setBidAmount(parseInt(e.target.value))}
                  />
                  <button onClick={handleBidSubmit}>Confirm</button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDetails;

