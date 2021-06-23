import Navigation from "./Components/Navigation";
import Footer from './Components/Footer'
import Home from "./Views/Home";
import Info from "./Views/Info";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navigation />
            <div className="vh-100">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/info" exact>
                        <Info />
                    </Route>
                </Switch>
            </div>
            <Footer />
    </Router>




    );
}

export default App;
