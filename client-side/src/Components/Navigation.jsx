import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import {HubotIcon} from '@primer/octicons-react'




export default class Navigation extends Component
{
    render()
    {
        return (
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href=""><HubotIcon size={24} /> Gaming</Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="#home"><Button variant="outline-info">Home</Button></Nav.Link>
                    <Nav.Link href="#home"><Button variant="outline-info">Link 2</Button></Nav.Link>
                    <Nav.Link href="#home"><Button variant="outline-info">Link 3</Button></Nav.Link>
                </Nav>
                
                
            </Navbar>
        )
    }
}