import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import React from 'react';
import List from './list';
import {Route, Switch} from 'react-router-dom';
import NotFound from './general/404';
import Nav from './nav/nav';
import About from './about';
import Graph from './graph'

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Switch>
                <Route path="/" exact component={List}/>
                <Route path="/about" exact component={About}/>
                <Route path="/graph" exact component={Graph}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </div>
);

export default App;
