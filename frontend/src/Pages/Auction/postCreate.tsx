import React, { useState } from 'react';
import './PostCreate.css';

const PostCreate: React.FC<{}> = () => {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [bidIncrement, setBidIncrement] = useState<number>(0);
  const [reservePrice, setReservePrice] = useState<number | null>(null);
  const [auctionDuration, setAuctionDuration] = useState<string>('');
  const [buyItNowPrice, setBuyItNowPrice] = useState<number | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform actions to publish the auction post
    console.log({
      image,
      title,
      description,
      bidIncrement,
      reservePrice,
      auctionDuration,
      buyItNowPrice,
    });
  };

  return (
    <div className="postcreate" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
      <form className="postForm" onSubmit={handlePublish}>
        <h3>Create an Auction post</h3>
        <div className="postFormGroup">
          <label htmlFor="fileInput" className="btnn">
            + Add Product Image
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </label>
          <input
            className="postInput"
            placeholder="Title/Name.."
            type="text"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="postFormGroup">
          <input
            className="postInput"
            placeholder="Enter Amount.."
            type="number"
          />
          <input
            className="postInput"
            placeholder="Initial Price.."
            type="float"
            value={reservePrice || ''}
            onChange={(e) =>
              setReservePrice(e.target.value ? Number(e.target.value) : null)
            }
          />
          <input
            className="postInput"
            placeholder="Buy It Now Price (optional)"
            type="number"
            value={buyItNowPrice || ''}
            onChange={(e) =>
              setBuyItNowPrice(e.target.value ? Number(e.target.value) : null)
            }
          />
          <input
            className="postInput"
            placeholder="Auction Duration"
            type="integer"
            value={auctionDuration}
            onChange={(e) => setAuctionDuration(e.target.value)}
          />
          <input
            className="postInput"
            placeholder="Origin/District of the product.."
            type="text"
          />
          <input
            className="postInput"
            placeholder="Size of the product.."
            type="text"
          />
          <input
            className="postInput"
            placeholder="Color of the product.."
            type="text"
          />
        </div>
        <div className="postFormGroup">
          <textarea
            className="postInput postText"
            placeholder="Write the details of your product"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="btnn" type="submit">
          Publish
        </button>
       
      </form>
    </div>
  );
};

export default PostCreate;






