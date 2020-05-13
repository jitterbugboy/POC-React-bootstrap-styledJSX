import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Container from "react-bootstrap/Container";
//import Container from "./bootstrap-wrappers/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ContainerCustom as Container}from "./bootstrap-wrappers/ContainerCustom";
require('bootstrap/dist/css/bootstrap.css');

function App() {
    return (

        <Container>
            <Row  ><Col md={4} style={{backgroundColor:"green"}} >hallo</Col></Row>

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Container>
    );
}

export default App;
