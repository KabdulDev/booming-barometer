import React, { Component } from 'react';
import './Style/Components.css'
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
            
                <Navbar bg="dark" variant="dark">
                    <Container>

                    <Navbar.Brand href=""><HubotIcon size={24} /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <h3 className="nav-header">Gaming</h3>
                    </Nav>

                    <Nav className="ml-auto">
                        <Nav.Link href="/"><Button variant="outline-info">Home</Button></Nav.Link>
                        <Nav.Link href="/info"><Button variant="outline-info">Info</Button></Nav.Link>
                        {/* <Nav.Link href="#home"><Button variant="outline-info">Link 3</Button></Nav.Link> */}
                    </Nav>
                    
                    </Container>
                </Navbar>
            
        )
    }
}