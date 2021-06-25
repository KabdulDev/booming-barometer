import React, { Component } from 'react';
import './Components.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import {HubotIcon} from '@primer/octicons-react'




export default class Navigation extends Component
{
    render()
    {
        return (
            
                <Navbar bg="dark" variant="dark" className="navi" expand="md">
                    <Container>

                    <Navbar.Brand href=""><HubotIcon size={24} /></Navbar.Brand>
                    
                    
                    <Nav className="mr-auto">
                        <h3 className="nav-header">Steam Analytics</h3>
                    </Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/"><Button variant="outline-info">Home</Button></Nav.Link>
                            <Nav.Link href="/search"><Button variant="outline-info">Search</Button></Nav.Link>
                            <Nav.Link href="/analytics"><Button variant="outline-info">Analytics</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                    </Container>
                </Navbar>
            
        )
    }
}