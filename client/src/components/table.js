import React, {Component} from 'react';
import { getListData, deleteFishData } from '../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class Table extends Component{
    componentDidMount(){
        const { getListData } = this.props;
        getListData();
    }
    edit(){

    }
    delete(item, e){
        e.preventDefault();
        e.stopPropagation();
        const {deleteFishData, getListData} = this.props
        deleteFishData(item);
        getListData();
    }
    render(){
        let species = this.props.data.data &&  this.props.data.data[0] ?
        this.props.data.data.map((item, i)=>
            <tr key={i}>
                <td className="">{item.species}</td>
                <td className="">{item.location}</td>
                <td className="">{item.total}</td>
                <td><button onClick={(e) => this.delete(item.ID, e)} className="small-btn red white-text right">delete</button></td>
                {/* <td><button onClick={(e) => this.edit(item.ID, e)} className="small-btn black white-text right background">edit</button></td> */}
            </tr>
            ) : <tr>
                    <td>No recent catches</td>
                </tr>;

        return(
        this.props.data.data &&  this.props.data.data[0] ?
        <div className="container background">
            <table className="highlight responsive-table .hide-on-med-and-down .hide-on-large-only">
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
        : <h5 className="center grey-text">No Fish <i class="material-icons">mood_bad</i></h5>
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
    deleteFishData
})(withRouter(Table));