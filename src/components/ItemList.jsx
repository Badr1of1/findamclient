import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      if(!token){
        console.error('No token found');
        return
      }

      try {
        const response = await axios.get('https://findam.netlify.app/api/v1/items',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = response.data.items;
        setItems(data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='card-container'>
        {items.slice().reverse().map((item) => (
          <div className='card' key={item._id}>
            {item.photoUrl && <img src={item.photoUrl} alt={item.description} />}
            <Link className='card-title' to={`/items/${item._id}`}>{item.itemName}</Link>
            <p className='card-description'>{item.description}</p>
            <p>{item.location}</p>
            <p>{item.status}</p>
          </div>
        ))}
    </section>
  );
};

export default ItemList;
