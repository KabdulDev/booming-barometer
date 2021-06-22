import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function App()
{
    return (
        <main className="d-flex flex-column vh-100">
            <Container>
                <Jumbotron className="mt-5">
                    <h1>Welcome Everyone</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quo quos corporis debitis minima! Corrupti laborum architecto repudiandae nostrum error, alias voluptas sint accusamus autem aperiam necessitatibus tenetur. Maiores, vero?</p>
                </Jumbotron>

                <h2>Do some fancy CSS and JS here with some type of effect</h2>
            </Container>

        </main>
    );
}

export default App;
