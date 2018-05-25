import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../containers/home';
import About from '../containers/about';
import AddItem from '../containers/addItem';
import '../css/home.css';

const Header = () => (
  <div>
    <header>
      <div className="container">
        <div className="logo">
          <img className="img1" src="https://www.flow.io/wp-content/themes/flow/assets/img/logo-branco-part1.png" />
          <img className="img2" src="https://www.flow.io/wp-content/themes/flow/assets/img/logo-branco-part2.png" />
        </div>
        <Link href="#/" to="/">Home</Link>
        <Link href="#add-item" to="/add-item">Add Item</Link>
        <Link href="/about-us" to="/about-us">About</Link>
      </div>
    </header>
    <main className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/add-item" component={AddItem} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default Header;
