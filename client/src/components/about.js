import React, {Component} from 'react';
import me from '../assets/images/me.jpeg'
import bass from '../assets/images/bass.jpeg'
import fishpole from '../assets/images/fishpole.jpeg'
import smallfish from '../assets/images/smallfish.jpeg'
import yellow from '../assets/images/yellow.png'
import '../assets/css/about.scss'

class About extends Component {
    componentDidMount(){
        this.instance = M.Slider.init(this.slider);
    }
    render(){
        console.log("list Props", this.props);
        return(
            <div className="container">
                <h1 className="todayFont blue-text center">Welcome</h1>
                <div className="divider"></div>
                <div className="section"></div>
                <div className="slider" ref={(e)=> this.slider = e}>
                    <ul className="slides">
                        <li>
                            <img src={me}></img>
                            {/* <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div> */}
                        </li>
                        <li>
                            <img className="contain" src={bass}></img>
                        </li>
                        <li>
                            <img className="contain" src={fishpole} ></img>
                        </li>
                        {/* <li>
                            <img src={smallfish} ></img>
                        </li> */}
                        <li>
                            <img className="contain" src={yellow}></img>
                        </li>
                    </ul>
                </div>
                <h5>About me</h5>
                <p className="grey-text">I love to fish and code so I decided to combine the two in this project. I wanted to build a web application that would store all the information I wanted to save about my catches. I then decided to create Fish-Notes. Fish notes is a way for the user to keep statistics on all of their catches.</p>
                <section className="space" ></section>
            </div>
        );
    }
}

export default About;