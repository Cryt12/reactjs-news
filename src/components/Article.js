import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="article">
      <img src={article.image} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href="#" className="read-more-button">Read more</a>
    </div>
  );
}

export default Article;
