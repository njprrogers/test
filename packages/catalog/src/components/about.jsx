import React from 'react';

const About = () => (
  <div className="page-container">
    <h1>
      About the App
    </h1>
    <p>
      Welcome to the FLOW catalog browser application. This is a first attempt at React / Redux / React forms. It's 
      been a great learning exercise. I've prioritised some things over others as the exercise is quite open ended.
    </p>
    <p>
      With more time, I would do the following:
    </p>
    <ul>
      <li>
        have a proper browse page
      </li>
      <li>
        do something with paging
      </li>
      <li>
        render images better
      </li>
      <li>
        upsertItem.js definitely feels too big
      </li>
      <li>
        write many more tests
      </li>
      <li>
        write many many more tests :-)
      </li>
    </ul>
    <p>
      What's in here?
    </p>
    <ul>
      <li>
        You can browse / add / edit / delete items
      </li>
      <li>
        I've used api builder for both the flow client and prop types (although dodgy data is causing some warnings from prop types)
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
          <li>
            <span className="code">
              yarn test
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
      Test &amp; Console Warnings
    </h2>
    <ul>
      <li>
        There is a key warning coming from the react-forms select component when you run the tests
      </li>
      <li>
        There are props warnings in the console when you run the app. My understanding is this is caused
        by some dodgy data not matching the props which I downloaded from api builder
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
