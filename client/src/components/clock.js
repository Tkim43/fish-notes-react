import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {updateTime} from '../actions/index'

class Clock extends Component{
    componentDidMount(){
        setInterval(()=>{
            this.props.updateTime();
        },1000);
    }
    render(){
        return(
            <div className ="text-center mt-5">
                <h5 className="grey-text">{this.props.date}</h5>
                <h6 className="">{this.props.time}</h6>
            </div>
        )
    }
}

function mapStateProps(state){
    return{
        time: state.list.time,
        date: state.list.date
    }
}
export default connect(mapStateProps,{updateTime: updateTime})(Clock);