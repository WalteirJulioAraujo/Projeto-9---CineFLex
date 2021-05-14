import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Header from "./Header"
import Home from "./Home"
import InfoMovie from "./InfoMovie"

export default function App(){
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/filme/:idFilme" exact>
                    <InfoMovie />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}