import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

interface AuctionItem {
  name: string;
  items: { type: string; description: string }[];
}

const PostDetails: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [auctionProduct, setAuctionProduct] = useState<AuctionItem | null>(null);

  // Mock data for demonstration
  const mockAuctionProduct: AuctionItem = {
    name: 'Potato',
    items: [
      { type: 'image', description: 'Image 1' },
      { type: 'description', description: 'Product Description' },
      { type: 'size', description: 'Medium' },
      { type: 'color', description: 'Blue' },
      // Add more item types as needed
    ],
  };

  useEffect(() => {
    // Simulate fetching data based on postId (replace with actual API call)
    setAuctionProduct(mockAuctionProduct);
  }, [postId]);

  return (
    <div className="post-details-container">
      {auctionProduct && (
        <>
          <h2>{auctionProduct.name}</h2>
          <div className="image-gallery">
            {auctionProduct.items
              .filter((item) => item.type === 'image')
              .map((image, index) => (
                <img key={index} src={image.description} alt={`Product Image ${index + 1}`} />
              ))}
          </div>
          <div className="details-section">
            <h3>Product Details:</h3>
            <ul>
              {auctionProduct.items
                .filter((item) => item.type !== 'image')
                .map((item, index) => (
                  <li key={index}>
                    <strong>{item.type}:</strong> {item.description}
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
