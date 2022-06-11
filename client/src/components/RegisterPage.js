import {
    registerWithEmailAndPassword
} from "../services/firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RegisterNavbar from "./RegisterNavbar";

import React, { useState } from "react";

import "../App.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <RegisterNavbar />
            <section className="login-container">
                <div className="filter" />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mx-auto">
                            <Card className="mx-auto">
                                <Card.Body>
                                    <Card.Title className="text-center mt-3 mb-5">User Registration</Card.Title>
                                    <div>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="name"
                                                placeholder="Enter name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>
                                        <hr style={{ margin: "5%" }} />

                                        <div className="d-grid gap-2">
                                            <Button
                                                variant="outline-danger"
                                                type="submit"
                                                onClick={() => {
                                                    registerWithEmailAndPassword(name, email, password);
                                                }}
                                            >
                                                Register
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
