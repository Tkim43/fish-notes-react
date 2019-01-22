import React, {Component} from 'react';

class Nav extends Component {
    state={
        common:[
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'About',
                to: '/about'
            },
            {
                text: 'Graph',
                to: '/graph'
            }
        ]
    }
    render(){
        return(
            <nav className="blue-grey darken-3"></nav>
        )
    }
}

export default Nav;