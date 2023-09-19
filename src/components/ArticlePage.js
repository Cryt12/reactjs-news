import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const article = newsData.articles[id];

  return (
    <div className="article-page">
      <img src={article.image} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
    </div>
  );
}

export default ArticlePage;
