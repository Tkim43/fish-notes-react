import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {getListData} from '../actions';

class List extends Component {
    componentDidMount(){
        // this.props.getListData();
    }
    render(){
        console.log("list Props", this.props);
        return(
            <div>
                <h1 className="center">Fish Notepad</h1>
                <p className="center grey-text">Keep track of all your fish!</p>
            </div>
        );
    }
}

export default List;

// function mapStateToProps(state){
//     return{
//         todos: state.list.all
//     }
// }

// export default connect(mapStateToProps, {
//     getListData,
// })(List);

