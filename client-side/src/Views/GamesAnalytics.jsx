import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import axios from 'axios';



export default class GamesAnalytics extends Component
{
    render()
    {
        return(
            <div className="ml-5 mr-5 mt-5 game">
                <Row  className="justify-content-center">

                    <Col xs={10} md={6} className="pt-5">
                        <div className="text-center">
                            <h2>Top Games Searched For</h2>
                        </div>
                        <Table bordered variant="dark">
                            
                            <thead>
                                <tr>
                                    <th>Game</th>
                                    <th>Searched For:</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>List Games</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>

                <Row  className="justify-content-center">

                    <Col xs={10} md={6} className="pt-5">
                        <div className="text-center">
                            <h2>Top Games Clicked On</h2>
                        </div>
                        <Table bordered variant="dark">
                            
                            <thead>
                                <tr>
                                    <th>Game</th>
                                    <th>Clicked On:</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>List Games</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>

                <Row  className="justify-content-center">

                    <Col xs={10} md={6} className="pt-5">
                        <div className="text-center">
                            <h2>Top Steam Store Clicked On</h2>
                        </div>
                        <Table bordered variant="dark">
                            
                            <thead>
                                <tr>
                                    <th>Game</th>
                                    <th>Clicked On:</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>List Games</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            </div>
        )
    }
}