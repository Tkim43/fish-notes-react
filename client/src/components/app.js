import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import React from 'react';

import {Route, Switch} from 'react-router-dom';
import NotFound from './general/404';
import Nav from './nav/nav';
import List from './list';
import About from './about';
import Home from './home';
import Graph from './graph';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/notes" exact component={List}/>
                <Route path="/about" component={About}/>
                <Route path="/graph" component={Graph}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </div>
);

export default App;
