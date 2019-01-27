import React, {Component, Fragment} from 'react';

class Clock extends Component{

    render(){
        let day = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        return(
        <Fragment>
            {/* <div className="divider"></div> */}
            <h5>{day}</h5>
            {/* <div className="divider"></div> */}
            <h6 className="grey-text">{time}</h6>
        </Fragment>
        )
    }
    
}

export default Clock;