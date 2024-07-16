import { useState, useEffect } from 'react';
import axios from 'axios';

const useComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/v1/comments');
        setComments(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  return { comments, loading, error };
};

export default useComment;