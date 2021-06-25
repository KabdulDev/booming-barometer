import './App.css';
import React, { Component } from 'react';
import RowVal from '../Components/Row'
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
            this.setState({values: response.data});
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
        

        if (games.length !== 0)
        {
            return games.map(game => <RowVal key={game.id} name={game.name} id={game.steamAppId} />)
        }
        else
        {
            return (
                <tr>
                    <td>No Results Found</td>
                    <td>Search Again</td>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
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