import React from 'react';
import { Link } from 'react-router-dom';
import Headline from './Headline';
import Article from './Article';
import newsData from '../data/newsData';
import NewsTicker from './NewsTicker';

const HomePage = () => {
  const newsItems = [
  ];

  return (
    <div>
      {}
      <NewsTicker newsItems={newsItems} />
      <section className="headline-section">
        {newsData.headline.map((article, index) => (
          <Link to={`/article/${index}`} key={index}>
            <Headline article={article} />
          </Link>
        ))}
      </section>
      <section className="article-section">
        {newsData.articles.map((article, index) => (
          <Link to={`/article/${index}`} key={index}>
            <Article article={article} />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
