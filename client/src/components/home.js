import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Clock from './clock';
// import {connect} from 'react-redux'
// import {getListData} from '../actions'
import logo from '../assets/images/fish_count.png'
import '../assets/css/home.scss';

class Home extends Component {
    componentDidMount(){
        this.instance = M.Collapsible.init(this.collapsbile);
        // const {getListData} = this.props;
        // getListData();
    }
    // redirect =(event)=>{
    // event.preventDefault();
    // const {history} = this.props
    //     history.push('/notes');
    // }
    render(){
        console.log("list Props", this.props);
        return(
            <div>
            <div className="row center">
                {/* <h2 className="blue-text todayFont">Welcome to Fish Notes!</h2> */}
                <img className="logo" src={logo}></img>
                <Clock/>
                {/* <h5 className="grey-text monoFont">3:00pm</h5> */}
                <Link to={'/notes'} className="btn-large blue-darken-2">Add Fish</Link>
            </div>
            <ul ref={(e)=> this.collapsbile = e} className="collapsible popout s12">
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

// function mapStateToProps(state){
//     const { list } = state;
//     return {
//         data: list,
//     }
// }

// export default connect(mapStateToProps,{
//     getListData,
// })(Home);

export default Home;
