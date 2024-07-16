import { useEffect, useState } from 'react';
import axios from 'axios';

const MyListingsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const fetchUserItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://findam.onrender.com/api/v1/user/items', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data.items);
    } catch (error) {
      console.error('Error fetching user items:', error);
      setError('Failed to fetch items.');
    }
  };

  useEffect(() => {
    fetchUserItems();
  }, []);

  const handleDelete = async (itemId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      await axios.delete(`https://findam.onrender.com/api/v1/items/${itemId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setItems(items.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  return (
    <div>
      <h1>My Listings</h1>
      {error && <p>{error}</p>}
      <div className="item-list">
        {items.map(item => (
          <div key={item._id} className="item">
            <img src={item.photoUrl} alt={item.description} />
            <h2>{item.description}</h2>
            <p>{item.location}</p>
            <p>{item.contactInfo}</p>
            <p>Status: {item.status}</p>
            <button className='delete-button' onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;
