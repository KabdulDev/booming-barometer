import './App.css';
import React, { Component } from 'react';
import RowSearch from '../Components/RowSearch'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';






export default class Search extends Component
{

    constructor()
    {
        super();

        this.state =
        {
            values: [],
            searchTerm: ""
        }
    }

    handleOnSubmit = async (e) =>
    {
        e.preventDefault();

        const searchField = document.getElementById("searchGames").value
        console.log(searchField)
        
        
        try
        {
            await axios.post(`http://localhost:3001/searchtype=name/term=${searchField}`)
            const response = await axios.get(`http://localhost:3001/games/term=${searchField}/limit=nolimit`);
            console.log(response.data);
            this.setState({values: response.data, searchTerm: searchField});
            /*
                ask Karimu what to do here with search term
            */
        }
        catch(err)
        {
            console.log(err);
        }
        
    }

    
    rows = () =>
    {
        const games = this.state.values;
        const searchV = this.state.searchTerm;
        

        if (games.length !== 0)
        {
            return games.map(game => <RowSearch search={searchV} key={game.id} name={game.name} id={game.steamAppId} />)
        }
        else
        {
            return (
                <tr>
                    <td>No Results</td>
                    <td>Search</td>
                </tr>
            )
        }
    }


    render()
    {
        return (
            <Container className="mt-5 d-flex flex-column vh-100">
                <Jumbotron className="mt-5">
                    <h1>Search by Game</h1>
                    <p>Search for any game that exists on the Steam platform. We will return to you plenty of results for you to be able to look at the game's profile page with additional information.</p>
                    <p>Disclaimer: The term you use to search will be recorded and gathered as data, so please do not search with disturbing terms. The developers and data analysts will much appreaciate it. Just kidding, use any term you want.</p>
                    <p>We will also be recording the game you will be clicking on taking into account the search term you have used. We will also record if you click on the Steam Store link on the game profile page.</p>
                </Jumbotron>
                
                <Form onSubmit={this.handleOnSubmit}>
                <Row className="mt-2 mb-5 justify-content-center">
                    <Col xs={6} md={4}>
                        <input type="text" className="form-control" placeholder="Search for game(s)" id="searchGames"/>
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
                            <th>Game</th>
                            <th>Steam ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <this.rows />
                    </tbody>
                </Table>
                
            </Container>

            

        )
    }
} 