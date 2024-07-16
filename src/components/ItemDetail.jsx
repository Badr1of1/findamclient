import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ItemDetail = () => {
  const {id} = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => { 
    const fetchData = async () => { 
      try {
        const response = await axios.get(`https://findam.netlify.app/api/vi/items/${id}`)

        setItem(response.data.item)
      } catch (error) {
        console.log(error);
      }
     }
     fetchData()
   }, [id])
   if(!item){
    return(
      <div>
        Loading...
      </div>
    )
   }
  return (
    <section>
      <h1>{item.description}</h1>
      <p>{item.location}</p>
      <p>{item.contactInfo}</p>
      <p>Status: {item.status}</p>
    </section>
  )
}
export default ItemDetail