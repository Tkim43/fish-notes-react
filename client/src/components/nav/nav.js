import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import SideNav from './side_nav';
import './nav.scss'

class Nav extends Component {
    state={
        common:[
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'Notes',
                to: '/notes'
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
    buildLink(link){
        return (
        <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
        </li>);
    }
    getSideNavRef(e){
        console.log("side Nav ref", e);
    }  
    renderLinks= ()=>{
        const {common} =this.state
        const commonLinks = common.map(this.buildLink);
        return[...commonLinks];
    }
    render(){
        return(
            <Fragment>
                <nav className="blue-grey darken-2">
                    <div className="nav-wrapper">
                        <Link className="brand-logo monoFont" to="/">Fish Notes</Link>
                        <a href="#" data-target="side-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>
                <SideNav renderLinks={this.renderLinks}/>
            </Fragment>
            
        )
    }
}

export default Nav;