import React, { useState, useEffect } from 'react';
import './Auction.css';
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

const AdminPost: React.FC = () => {
  const [auctionProducts, setAuctionProducts] = useState<AuctionItem[]>([]);
  const [resizedImages, setResizedImages] = useState<string[]>([]);

  useEffect(() => {
    // Simulated data for demonstration
    const demoData: AuctionItem[] = [
      {
        post_id: 1,
        name: 'Product 1',
        amount: '10',
        price: '100',
        total_bidding_placed: 5,
        start_time: '2023-01-01T00:00:00Z',
        end_time: '2023-01-02T00:00:00Z',
        current_time: '2023-01-01T12:00:00Z',
        items: [{ type: 'Type 1', description: 'Description 1' }],
      },
      // Add more simulated data if needed
    ];

    setAuctionProducts(demoData);

    // Simulated image data for demonstration
    const demoImages: string[] = ['image1.jpg', 'image2.jpg']; // Replace with actual image URLs
    setResizedImages(demoImages);
  }, []);

  const handlePlaceBidding = (post_id: number) => {
    // Handle bidding logic (UI-only)
    console.log(`Place bidding for product ${post_id}`);
  };

  return (
    <div className="amazon-container">

      <div className="amazon-products">
        {auctionProducts.map((product, index) => {
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
                
                <Link to ="/adminDetails" type="button" className="btnn"> Preview Bidding Post</Link>
                
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPost;
