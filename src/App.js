import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';
import CategoryPage from './components/CategoryPage';
import newsData from './data/newsData';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <aside className="category-section">
        {newsData.categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </aside>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/article/:id" component={ArticlePage} />
          {}
          <Route path="/category/:category" component={CategoryPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
