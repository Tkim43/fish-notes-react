import React, {Component} from 'react';
import { getListData } from '../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Table extends Component{
    componentDidMount(){
        const { getListData } = this.props;
        getListData();
    }
    render(){
        
        let species = this.props.data.data && this.props.data.data[0] ?
        this.props.data.data.map((item, i)=>
            <tr key={i}>
                <td>{item.species}</td>
                <td>{item.location}</td>
                <td>{item.total}</td>
            </tr>
            ) : <tr>
                    <td>No recent catches</td>
                </tr>;

        return(
        <div className="container background">
            <table className="highlight">
                    <thead>
                    <tr>
                        <th>Species</th>
                        <th>Location</th>
                        <th>Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    {species}
                    </tbody>
                </table>
     </div>
        );
    }
}

function mapStateToProps(state){
    const { list } = state;
    return{
        data: list,
    }
}

export default connect(mapStateToProps,{
    getListData,
})(withRouter(Table));