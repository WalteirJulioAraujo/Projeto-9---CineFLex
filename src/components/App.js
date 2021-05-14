import { useState } from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Header from "./Header"
import Home from "./Home"
import InfoMovie from "./InfoMovie"
import InfoSession from "./InfoSession"
import OrderSucess from "./OrderSucess"

export default function App(){
    const [info,setInfo] = useState({});

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
                <Route path="/sessao/:idSessao" exact>
                    <InfoSession setInfo={setInfo} info={info}/>
                </Route>
                <Route path="/sucesso" exact>
                    <OrderSucess info={info}/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}