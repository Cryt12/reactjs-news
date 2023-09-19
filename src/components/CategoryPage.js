import React from 'react';
import { Link, useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import Article from './Article';

const CategoryPage = () => {
  const { category } = useParams();

  // Filter articles based on the category
  const filteredArticles = newsData.articles.filter((article) =>
    article.categories.includes(category)
  );

  return (
    <div>
      <h2>Articles in {category}</h2>
      <div className="article-section">
        {filteredArticles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id} className="article-link">
            <Article article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
};


export default CategoryPage;
