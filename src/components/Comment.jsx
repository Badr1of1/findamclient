import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <h2>{comment.text}</h2>
      <p>By {comment.author}</p>
    </div>
  );
};

export default Comment;