import React, { Component} from "react";
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button";
import axios from 'axios';





export default class Game extends Component
{

    constructor()
    {
        super();

        this.state =
        {
            id: "",
            game: {},
            click: 0,
            searchTerm: ""

        }
    }

    async componentDidMount()
    {

        const { match: { params } } = this.props;
        const value = params.id;
        const search = params.search;
        
        // search for game info
        try
        {
            const res = await axios.get(`http://localhost:3001/game/steam/id=${value}`);
            const game = res.data.[value].data
            
            this.setState({game: game, id: value, searchTerm: search})
        }
        catch(err)
        {
            console.log(err)
        }

    }


    handleOnClick = async () =>
    {
        const search = this.state.searchTerm;
        const id = this.state.id;
        console.log(search, id);
        try
        {
            await axios.post(`http://localhost:3001/searchtype=name/term=${search}/appId=${id}/storeClick`)
            
        }
        catch(error)
        {
            console.log(error)
        }

        window.open(`https://store.steampowered.com/app/${id}`);
    }

    

    render()
    {

        const game = this.state.game;
        console.log(game)
        return (
            <Container className="mt-5 game">
                <Row  className="justify-content-center">
                    <Col xs={10} md={5} className="pt-5">
                        <h2>{game.name}</h2>
                        <Table bordered variant="dark">
                            <tbody>
                                <tr>
                                    <td>App ID:</td>
                                    <td>{game.steam_appid}</td>
                                </tr>
                                <tr>
                                    <td>Required Age:</td>
                                    <td>{game.required_age}</td>
                                </tr>
                                <tr>
                                    <td>Controller Support:</td>
                                    <td>{game.controller_support}</td>
                                </tr>
                                <tr>
                                    <td>Is Free:</td>
                                    <td>{game.is_free ? "Yes" : "No"}</td>
                                </tr>
                                <tr>
                                    <td>Website:</td>
                                    <td><a href={game.website}>{game.website}</a></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={8} md={5} className="pt-2 text-center">
                        <div>
                            <Image src={game.header_image} rounded fluid/>
                            <p>{game.short_description}</p>
                        </div>
                        <Button onClick={this.handleOnClick} className="mb-2 mt-4">Steam Store Link</Button>
                    </Col>

                </Row>
            </Container>
        )
    }
}