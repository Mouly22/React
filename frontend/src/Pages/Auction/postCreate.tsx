import React, { useState } from 'react';
import axios from 'axios';
import './PostCreate.css';

interface Item {
  type: string;
  description: string;
}

const PostCreate: React.FC<{}> = () => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [reservePrice, setReservePrice] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [auctionDuration, setAuctionDuration] = useState<string>('');
  const [items, setItems] = useState<Item[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleAddItem = () => {
    setItems([...items, { type: '', description: '' }]);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleItemChange = (index: number, field: keyof Item, value: string) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleItemDescriptionChange = (index: number, value: string) => {
    const updatedItems = [...items];
    updatedItems[index].description = value;
    setItems(updatedItems);
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Form data for auction product
      const auctionFormData = new FormData();
      auctionFormData.append('name', title);
      auctionFormData.append('amount', amount?.toString() || ''); // replace with the actual amount
      auctionFormData.append('price', reservePrice?.toString() || '');
      auctionFormData.append('total_bidding_placed', '0'); // initial value
      auctionFormData.append('start_time', new Date().toISOString());
      auctionFormData.append('end_time', auctionDuration); // replace with the actual end time
      auctionFormData.append('current_time', new Date().toISOString());
      auctionFormData.append('description', description);

      // Post auction product data
      const response = await axios.post(
        'http://127.0.0.1:8000/register_add_auction_products/',
        auctionFormData
      );

      // Post image
      if (image) {
        const imageFormData = new FormData();
        imageFormData.append('post_id', response.data.post_id);
        imageFormData.append('image', image);

        await axios.post(
          'http://127.0.0.1:8000/register_add_auction_images/',
          imageFormData
        );
      }

      console.log('Auction post published successfully!');
    } catch (error) {
      console.error('Error publishing auction post:', error);
    }
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
            placeholder="Enter Amount of Product.."
            type="number"
            value={amount || ''}
            onChange={(e) =>
              setAmount(e.target.value ? parseFloat(e.target.value) : null)
            }
          />
          <input
            className="postInput"
            placeholder="Initial Price.."
            type="number"
            value={reservePrice || ''}
            onChange={(e) =>
              setReservePrice(e.target.value ? parseFloat(e.target.value) : null)
            }
          />
          <textarea
            className="postInput"
            placeholder="Item Description.."
            value={description || ''}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {items.map((item, index) => (
          <div key={index} className="postFormGroup">
            <textarea
              className="postInput"
              placeholder="Item Description.."
              value={item.description}
              onChange={(e) => handleItemDescriptionChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="postFormGroup">
          <label>
            Auction Duration:
            <input
              className="postInput"
              placeholder="Auction Duration.."
              type="datetime-local"
              value={auctionDuration}
              onChange={(e) => setAuctionDuration(e.target.value)}
            />
          </label>
        </div>
        <button className="btnn" type="submit">
          Publish
        </button>
        <button className="btnn" type="button" onClick={handleAddItem}>
          + Add Product Item
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
