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
                            <h4>Jonathan Montoya</h4>
                            <h4>Karimu Mohammed</h4>
                            <p>Description, intro, etc</p>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Second slide"
                            />
                            
                            <Carousel.Caption>
                                <h3>Goals & Constraints</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam tempora in deleniti excepturi, sit nobis voluptate architecto dolorum cumque dolor suscipit ipsum, repellendus odio nesciunt et similique molestiae facere eveniet.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Challenges</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Accomplishments and Lessons</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.ppt-backgrounds.net/thumbs/simple-black-for-presentation--clipartsgram--photo-image.jpeg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Future Work?</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                    </Carousel>
                </Col>
            </Row>

            
        </Container>

    );
}

export default App;