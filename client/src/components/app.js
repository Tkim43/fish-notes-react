import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import React from 'react';
import List from './list';
import {Route} from 'react-router-dom';

const App = () => (
    <div className="container">
        <Route path="/" exact component={List}/>
    </div>
);

export default App;
