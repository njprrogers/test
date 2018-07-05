import React from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import Home from '../containers/homeContainer';
import About from './about';
import UpsertItemContainer from '../containers/upsertItemContainer';
import '../css/home.css';
import imgPath1 from '../images/logo-branco-part1.png';
import imgPath2 from '../images/logo-branco-part2.png';

const Header = () => (
  <BrowserRouter>
    <div>
      <header>
        <div className="container">
          <nav className="">
            <Link href="#/" to="/">
              Home
            </Link>
            <Link href="#upsert-item" to="/upsert-item">
              Add Item
            </Link>
            <Link href="/about-us" to="/about-us">
              About the app
            </Link>
          </nav>
          <div className="logo">
            <img className="img1" alt="flow" src={imgPath1} />
            <img className="img2" alt="flow" src={imgPath2} />
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
  </BrowserRouter>
);

export default Header;
