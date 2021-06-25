import './App.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function App()
{
    return (
        
        
        <Container>
            <Jumbotron className="mt-5">
                <h1>Steam Search Analytics</h1>
                <p>A Steam search engine that returns game items and store checkout pages alongside other game information. This web app also gathers data and information from all users such as games clicked on, searched for and much more. This information is available for everyone to see in the Analytics page.</p>
            </Jumbotron>

            <h2>Do some fancy CSS and JS here with some type of effect</h2>
        </Container>

    );
}

export default App;