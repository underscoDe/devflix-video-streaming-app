import { auth } from "../services/firebase";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cards from './Cards.js';

import "../App.css";
import heroImage from '../assets/img/home-hero.jpg';

const Home = ({ user }) => {
  return (
    <>
      <div class="header-bg">
        <div class="container text-center">
          <div class="text mx-auto">
            <h1>DevFlix</h1>
            <p>We have an extensive archive of free movies and shows for long-lasting streaming. Choose what you like, and start watching.</p>
          </div>
        </div>
      </div>
      <div class="card-container mx-auto">
        <Cards />
      </div>
      <div className="container-fluid" style={{ marginTop: "10%" }}>
        <div className="row">
            <Card.Body>
              <Card.Title>Welcome</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {user.displayName}
              </Card.Subtitle>
              <img src={user.photoURL} alt="" />
              <Button
              style={{margin: '5%'}}
              variant="outline-danger"
              type="submit"
              onClick={() => auth.signOut()}
            >
              Sign Out
            </Button>
            </Card.Body>
        </div>
      </div>
    </>
  );
};

export default Home;
