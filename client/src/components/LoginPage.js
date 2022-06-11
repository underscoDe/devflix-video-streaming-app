import {
  signInWithGoogle,
  signInWithEmailAndPassword
} from "../services/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LoginNavbar from './LoginNavbar.js'

import React, { useState } from "react";

import "../App.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <>
      <LoginNavbar />
      <section className="login-container">
        <div className="filter" />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-4 mx-auto">
              <Card className="mx-auto">
                <Card.Body>
                  <Card.Title className="text-center mt-3 mb-5">User Login</Card.Title>
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                      <Form.Text className="text-black">
                        We'll never share your email.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </Form.Group>
                    <hr style={{ margin: "5%" }} />

                    <div className="d-grid gap-2">
                      <Button
                        variant="outline-success"
                        type="submit"
                        onClick={() => {
                          signInWithEmailAndPassword(loginEmail, loginPassword);
                        }}
                      >
                        Login
                      </Button>
                      <Button
                        className="sign-google"
                        variant="outline-primary"
                        onClick={signInWithGoogle}
                      >
                        <i className="fa fa-google"></i>Sign-in with Goolge
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
