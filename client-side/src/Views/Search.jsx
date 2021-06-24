import './App.css';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';



export default class Search extends Component
{

    handleOnSubmit = async (e) =>
    {
        e.preventDefault();
        
        try
        {
            const response = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
            console.log(response);

        }
        catch(err)
        {
            console.log(err);
        }
        
        // const searchField = document.getElementById("searchGames").value
        // console.log(searchField)
    }


    render()
    {
        return (
            <Container className="mt-5 d-flex flex-column vh-100">
                <Jumbotron className="mt-5">
                    <h1>Search by Game</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                </Jumbotron>
                
                <Form onSubmit={this.handleOnSubmit}>
                <Row className="mt-2 mb-5 justify-content-center">
                    <Col xs={6} md={4}>
                        <input type="text" className="form-control" placeholder="Search for game" id="searchGames"/>
                    </Col>

                    <Col xs={2}>
                        <button className="btn-search">Search</button>
                    </Col>
                </Row>
                </Form>

                <Row>

                </Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        
                    </tbody>
                </Table>
                
            </Container>

            

        )
    }
} 