import React from 'react';

import './styles.css';

const Comment = ({ comment }) => (
  <div className="comment">
    <img
      className="comment-author-avatar"
      src={comment.author.avatar}
      alt="Author"
    />
    <div className="comment-box">
      <div className="comment-content">
        <b>{comment.author.name}</b>
        {' '}
        {comment.content}
      </div>
    </div>
  </div>
);

export default Comment;
