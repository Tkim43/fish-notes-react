import React, {Component} from 'react';
import { getListData, deleteFishData, updateFishData } from '../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import '../assets/css/table.scss'

import FishRow from './fishrow';

class Table extends Component{
    state = {
        edit: false,
        species: "",
        location: "",
        amount: "",
        ID: "",

    }
    componentDidMount(){
        const { getListData } = this.props;
        getListData();
    }

    table = () => {
        let species = this.props.data.data && this.props.data.data[0] ?
        this.props.data.data.map((item, i) => <FishRow className="innerFont" key={i} fishInfo={item} />) : <tr><td>No recent catches</td></tr>
        return species;
    }

    render(){
        return(
        this.props.data.data &&  this.props.data.data[0] ?
        <div className="container background">
            <table className="highlight centered responsive-table .hide-on-med-and-down .hide-on-large-only">
                    <thead>
                    <tr>
                        <th className="font"><h6>SPECIES</h6></th>
                        <th className="font"><h6>LOCATION</h6></th>
                        <th className="font"><h6>AMOUNT</h6></th>
                        <th className="font"><h6>OPTIONS</h6></th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.table()}
                    </tbody>
            </table>
        </div> 
        : <h5 className="center grey-text">No Fish <i className="material-icons">mood_bad</i></h5>
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
    deleteFishData,
    updateFishData
})(withRouter(Table));