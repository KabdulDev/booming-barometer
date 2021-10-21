import './App.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App()
{
    return (
        
        
        <Container>
            <Jumbotron className="mt-5">
                <h1>Booming Barometer</h1>
                <p></p>
                <p>A Steam search engine that not only returns a list of games and store checkout pages, but is designed to let you know what's currently hot! This web app gathers search data and user behavior from user interaction to build an understanding of what people are looking for and where those searches take them. Check out for yourself by running a search, clicking a game, and viewing the Analytics page.</p>
            </Jumbotron>

            <Row className="justify-content-center mb-5">
                <Col xs={8} >
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Steam Search and Store Analytics Project</h3>
                            <br />
                            <h4>Built By: <a href= "https://github.com/JonTrader?tab=repositories"> Jonathan Montoya</a> and <a href= "https://github.com/KabdulDev"> Karimu Mohammed </a> </h4>
                            <br />
                            <h3>Technology Stack</h3>
                            <br />
                            <h4><span>Front-end:</span> HTML, CSS, JavaScript, React, Bootstrap</h4>
                            <br />
                            <h4><span>Back-end:</span> Express, PostgreSQL, Sequelize, Heroku</h4>

                            
                            
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        
                    </Carousel>
                </Col>
            </Row>

            
        </Container>

    );
}

export default App;