import Navigation from "./Components/Navigation";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Game from "./Views/Game";
import GamesAnalytics from "./Views/GamesAnalytics";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navigation />
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

                <Route path="/game/:search/:id" component={Game} exact />
                    
            </Switch>
    </Router>




    );
}

export default App;
