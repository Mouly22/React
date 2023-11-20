import React, { useState, useEffect } from 'react';
import './Auction.css';
import Img1 from './Aimages/potato.jpg';
import Img2 from './Aimages/tomato.jpeg';
import Img3 from './Aimages/rice.jpg';
import Img4 from './Aimages/carrot.jpg';

interface Product {
  id: number;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  rating: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Potato',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img1,
  },
  {
    id: 2,
    name: 'Tomato',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img2,
  },
  {
    id: 3,
    name: 'Rice',
    weight: '5 ounce',
    price: 570,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img3,
  },
  {
    id: 9,
    name: 'Rice',
    price: 570,
    weight: '5 ounce',
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img3,
  },
  {
    id: 4,
    name: 'Carrot',
    price: 2.5,
    weight: '5 ounce',
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img4,
  },
  {
    id: 5,
    name: 'Carrot',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img4,
  },
  {
    id: 6,
    name: 'Carrot',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img4,
  },
  {
    id: 7,
    name: 'Carrot',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img4,
  },
  {
    id: 8,
    name: 'Carrot',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img4,
  },
  {
    id: 10,
    name: 'Tomato',
    weight: '5 ounce',
    price: 2.5,
    originalPrice: 2.5,
    rating: 4,
    imageUrl: Img2,
  },
  // Add more products as needed
];

const resizeImage = (imageUrl: string, width: number, height: number) => {
  const img = new Image();
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;

  return new Promise<string>((resolve) => {
    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL());
    };
    img.src = imageUrl;
  });
};

const Auction: React.FC = () => {
  const [resizedImages, setResizedImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchResizedImages = async () => {
      const resized = await Promise.all(
        products.map((product) => resizeImage(product.imageUrl, 200, 150))
      );
      setResizedImages(resized);
    };

    fetchResizedImages();
  }, []);

  const increasePrice = (productId: number) => {
    setResizedImages((prevImages) => {
      return prevImages.map((image, index) => {
        if (index === productId - 1) {
          const updatedPrice = products[index].price + 1;
          const updatedProduct = { ...products[index], price: updatedPrice };
          products[index] = updatedProduct;
        }
        return image;
      });
    });
  };

  return (
    <div className="amazon-container">
      {/* Sidebar */}
      <div className="sidebar">
        <button className="sidebar-button">Create New Post</button>
        <div className="sort-options">
          <p>Sort Options:</p>
          <button className="sidebar-button">Price Low to High</button>
          <button className="sidebar-button">Price High to Low</button>
          <button className="sidebar-button">Name A-Z</button>
          <button className="sidebar-button">Name Z-A</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="amazon-products" >
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img
              src={resizedImages[index]}
              alt={product.name}
              style={{ width: '200px', height: '150px' }}
            />
            <h3>{product.name}</h3>
            <h6>Amount: {product.weight}</h6>
            <h6>Rating: {product.rating}</h6>
            <h5>${product.price.toFixed(2)}</h5>
            <button onClick={() => increasePrice(product.id)}>Place your bidding</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auction;



















