import React from 'react';

const About = () => (
  <div className="page-container">
    <h1>
About Page
    </h1>
    <p>
Welcome to the FLOW catalog browser application
    </p>
    <ul>
      <li>
You can browse / add / edit / delete items
      </li>
      <li>
I've used Airbnb as a base for my linting.
      </li>
      <li>
        For the forms, I've used the react-forms (
        <a href="https://react-form.js.org/#/">
          https://react-form.js.org/#/
        </a>
) library. It has a nice API and lots of nice free stuff around
        validation / errors / successes.
      </li>
      <li>
I used create-react-app to create the app.
      </li>
      <li>
        To get up and running:
        <ul>
          <li>
            <span className="code">
yarn install
            </span>
          </li>
          <li>
            <span className="code">
yarn start
            </span>
          </li>
        </ul>
      </li>
      <li>
        I've organised the application's folder structure according to it's size
        and simplicity. If this was to scale up, I'd probably break the
        components out into further folders e.g. Forms / Scenes etc.
      </li>
    </ul>
    <h2>
Styling
    </h2>
    <ul>
      <li>
I've kept it simple, just using vanilla css.
      </li>
    </ul>
  </div>
);

export default About;
