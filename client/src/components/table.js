import React, {Component} from 'react';
import { getListData } from '../actions'
import {connect} from 'react-redux'

class Table extends Component{
    componentDidMount(){
        const { getListData } = this.props;
        getListData();
    }
    render(){
        if(this.props.data.data[0] === undefined){
            return(
                <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
                </div>
            </div>
            )
        }
        console.log("this is our prosp", this.props.data.data)
        let species = this.props.data.data && this.props.data.data[0] ?
        this.props.data.data.map((item, i)=>
            <tr key={i}>
                <td>{item.species}</td>
                <td>{item.location}</td>
                <td>{item.total}</td>
            </tr>
            ) : <tr>no recent catches</tr>;

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
        species: list,
        location: list,
        amount: list,
    }
}

export default connect(mapStateToProps,{
    getListData,
})(Table);