import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
  return (  
    <div className="category">
      {/* Pass the category as a prop to CategoryPage */}
      <Link to={`/category/${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {category}
      </Link>
    </div>
  );
}

export default Category;
