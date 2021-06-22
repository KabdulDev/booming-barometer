import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Table from 'react-bootstrap/Table'



export default class Info extends Component
{
    render()
    {
        return (

            <Container className="mt-5">
                <Jumbotron className="mt-5">
                    <h1>Welcome Everyone</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                </Jumbotron>
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