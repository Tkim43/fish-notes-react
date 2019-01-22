import React, {Component} from 'react';

class SideNav extends Component{
    componentDidMount(){
        console.log("side Nav reft" , this.sideNav);
        this.instance = M.Sidenav.init(this.sideNav);
    }
    render(){
        return(
            <ul ref={(e)=> this.sideNav = e}className="sidenav" id="side-nav">
                {this.props.renderLinks()}
            </ul>
        )
    }
}

export default SideNav;