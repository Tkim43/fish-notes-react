import React, {Component} from 'react';

class About extends Component {
    componentDidMount(){
    }
    render(){
        console.log("list Props", this.props);
        return(
            <div>
                <h1 className="center">About</h1>
                <p className="center grey-text">about Page</p>
            </div>
        );
    }
}

export default About;