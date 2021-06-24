import Navigation from "./Components/Navigation";
import Footer from './Components/Footer'
import Home from "./Views/Home";
import Search from "./Views/Search";
import Game from "./Views/Game";
import GamesAnalytics from "./Views/GamesAnalytics";
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

                    <Route path="/search" exact>
                        <Search />
                    </Route>

                    <Route path="/analytics" exact>
                        <GamesAnalytics />
                    </Route>

                    <Route path="/game/:id" component={Game} exact />
                    
                </Switch>
            </div>
            <Footer />
    </Router>




    );
}

export default App;
