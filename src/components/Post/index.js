import React from 'react';

import Comment from '../Comment';

import './styles.css';

const Post = ({ post }) => (
  <div className="post">
    <div className="post-header">
      <img src={post.author.avatar} className="author-avatar" />
      <div className="post-info">
        <div className="author-name">{post.author.name}</div>
        <div className="post-date">{post.date}</div>
      </div>
    </div>

    <div className="post-content">
      <div className="content">{post.content}</div>
      <div className="separator" />
    </div>

    <div className="post-comments">
      {post.comments.map((comment) => (
        <Comment key={comment} comment={comment} />
      ))}
    </div>
  </div>
);

export default Post;
