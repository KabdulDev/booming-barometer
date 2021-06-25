import React, { Component } from 'react';
import RowA from '../Components/RowAnalytics'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';



export default class GamesAnalytics extends Component
{
    constructor()
    {
        super()

        this.state =
        {
            topSearches: []
        }
    }

    async componentDidMount()
    {
        const res1 = await axios.get(`http://localhost:3001/search/top/num=5`);
        console.log(res1.data)
        this.setState({ topSearches: res1.data})
    }

    rowsTableOne = () =>
    {
        const topSearch = this.state.topSearches;

        return topSearch.map(search => <RowA key={search.id} term={search.searchTerm} num={search.searchCount}/>)
    }




    render()
    {
        return(
            <div className="ml-5 mr-5 mt-5 game">
                <Row  className="justify-content-center">

                    <Col xs={10} md={6} className="pt-5">
                        <div className="text-center">
                            <h2>Top Search Terms:</h2>
                        </div>
                        <Table bordered variant="dark">
                            
                            <thead>
                                <tr>
                                    <th>Search Term</th>
                                    <th>Number of Times Searched For:</th>
                                </tr>
                            </thead>

                            <tbody>
                                <this.rowsTableOne />
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