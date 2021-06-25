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
                <h1>Steam Search Analytics</h1>
                <p></p>
                <p>This is a Steam search engine that returns a list of games and store checkout pages alongside other game information. This web app also gathers data and information from all users such as games clicked on, searched for and much more. This information is available for everyone to see in the Analytics page.</p>
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
                            <h1>Analytics Project</h1>
                            <br />
                            <h5>A Steam search engine that returns a list of games with their respective Game Profile Page which will includes a button/link to redirect you to the Steam store.</h5>
                            <br />
                            <h4>Jonathan Montoya</h4>
                            <h4>Karimu Mohammed</h4>
                            
                            
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Second slide"
                            />
                            
                            <Carousel.Caption>
                                <h1>Technology Stack</h1>
                                <br />
                                <h4><span>Front-end:</span> HTML, CSS, JavaScript, React, Bootstrap</h4>
                                <br />
                                <h4><span>Back-end:</span> PostgreSQL, Sequelize</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Third Slide"
                            />
                            
                            <Carousel.Caption>
                                <h1>Goals:</h1>
                                <br />
                                <h5>Minimum Viable Product:</h5>
                                <h5>A game name search that returns n number of elements and records in a backend database searches, games clicked and store clicks.</h5>
                                <br />
                                <h1>Constraints:</h1>
                                <br />
                                <h5>Amount of Time</h5>
                                <h5>Scope of Project</h5>
                                <h5>API Documentation and available APIs</h5>
                                <h5>Lack of roadmap</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Fourth Slide"
                            />

                            <Carousel.Caption>
                            <h2>Accomplishments and Lessons</h2>
                            <br />
                            <h4>Met MVP for website</h4>
                            <h4>Gain of knowledge</h4>
                            <h4>Improvement in Communication</h4>
                            <h4></h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Fifth Slide"
                            />

                            <Carousel.Caption>
                            <h1>Future Work?</h1>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                </Col>
            </Row>

            
        </Container>

    );
}

export default App;