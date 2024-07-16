import { useEffect, useState } from 'react';
import axios from 'axios';

const MyListingsPage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const fetchUserItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://findam.netlify.app/api/v1/user/items', {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingsPage;
