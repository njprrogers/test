import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../containers/home';
import About from '../containers/about';
import UpsertItemContainer from '../containers/upsertItemContainer';
import '../css/home.css';

const Header = () => (
  <div>
    <header>
      <div className="container">
        <nav className="">
          <Link href="#/" to="/">Home</Link>
          <Link href="#upsert-item" to="/upsert-item">Add Item</Link>
          <Link href="/about-us" to="/about-us">About</Link>
        </nav>
        <div className="logo">
          <img className="img1" src="https://www.flow.io/wp-content/themes/flow/assets/img/logo-branco-part1.png" />
          <img className="img2" src="https://www.flow.io/wp-content/themes/flow/assets/img/logo-branco-part2.png" />
        </div>
      </div>
    </header>
    <main className="container">
      <Route exact path="/" component={Home} />
      <Route path="/upsert-item/:number" component={UpsertItemContainer} />
      <Route exact path="/upsert-item" component={UpsertItemContainer} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default Header;
