import React, {Component} from 'react';

class Graph extends Component {
    componentDidMount(){
    }
    render(){
        console.log("list Props", this.props);
        return(
            <div>
                <h1 className="center">Graph</h1>
                <p className="center grey-text">Graph me</p>
            </div>
        );
    }
}

export default Graph;