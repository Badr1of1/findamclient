import { useState } from "react";
import ItemList from "../components/ItemList";

const Feed = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  return (
    <section>
      <h3 style={{ textTransform: 'capitalize' }}>Welcome {user}</h3>
      <div>
        <ItemList />
      </div>
    </section>
  );
};

export default Feed;
