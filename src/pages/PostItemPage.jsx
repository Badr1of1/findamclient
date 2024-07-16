import { useState } from 'react';
import axios from 'axios';

const PostItemPage = () => {
  const [itemName, setItemName] = useState('')
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [status, setStatus] = useState('lost');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('itemName', itemName)
    formData.append('description', description);
    formData.append('location', location);
    formData.append('contactInfo', contactInfo);
    formData.append('status', status);
    formData.append('photo', photo);

    try {
      // Retrieve the token from local storage (or wherever you have stored it)
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:5000/api/v1/items', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Include the token in the request headers
        },
      });
      
      setMessage('Item posted successfully!');
    } catch (error) {
      console.error('Error posting item:', error);
      setMessage('Failed to post item. Please try again.');
    }
  };

  return (
    <div>
      <h1>Post an Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text"
          value={itemName}
          onChange={(e) => {setItemName(e.target.value)}}
          required />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Info:</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Post Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostItemPage;
