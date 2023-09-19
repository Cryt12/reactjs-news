import React from 'react';

const Headline = ({ article }) => {
  return (
    <div className="headline">
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href="#">Read more</a> 
    </div>
  );
}

export default Headline;
