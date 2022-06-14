import React from "react";
import Cards from './Cards.js';
import HomeNavbar from './HomeNavbar';

import "../App.css";

const Home = ({ user }) => {
  return (
    <>
      <HomeNavbar usr={user}/>
      <div className="header-bg">
        <div className="container text-center">
          <div className="text mx-auto">
            <h1>DevFlix</h1>
            <div>Welcome {user.displayName || user.email}</div>
            <p>We have an extensive archive of free movies and shows for long-lasting streaming. Choose what you like, and start watching.</p>
          </div>
        </div>
      </div>
      <div className="card-container mx-auto">
        <Cards />
      </div>
    </>
  );
};

export default Home;
