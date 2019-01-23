import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, "accordion");
        });
    }
    render(){
        console.log("list Props", this.props);
        return(
            <div>
            <div className="row center">
                <h1 className="blue-text monoFont">Today</h1>
                <h5 className="grey-text monoFont">3:00pm</h5>
                <Link to="/notes" className="btn green-darken-2">Add Fish</Link>
            </div>
            <ul className="collapsible popout s12">
                <li>
                <div className="collapsible-header"><i className="material-icons">info</i>About Fish Notes</div>
                <div className="collapsible-body"><span>A application that keeps gives anglers a fast and efficient way to log all important information about their fishing trips.</span></div>
                </li>
                <li>
                <div className="collapsible-header"><i className="material-icons">place</i>List of Locations You've been to</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                <div className="collapsible-header"><i className="material-icons">insert_chart</i>fish count statistics</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
                
            </div>
        );
    }
}

export default Home;