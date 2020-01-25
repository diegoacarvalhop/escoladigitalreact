import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Alunos from './pages/Alunos';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/alunos" component={Alunos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;