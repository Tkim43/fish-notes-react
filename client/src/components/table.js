import React, {Component} from 'react';
import { getListData, deleteFishData, updateFishData } from '../actions'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import '../assets/css/table.scss'

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
    handleSpeciesChange=(event, ID, location, total)=>{
        console.log("IT WENT HERE", event, ID)
        this.setState({
            species: event.currentTarget.value,
            location,
            amount: total,
            ID
        })
        // if(event.keyCode==13 || event.charCode == 13){
        //     console.log("KEY CODE", event.keyCode, event.charCode )
        //     this.update()
        // } 
    }
    handleLocationChange=(event, ID, species, total)=>{
        this.setState({
            location: event.currentTarget.value,
            species,
            amount: total,
            ID
        })
        // if(event.keyCode==13 || event.charCode == 13){
        //     console.log("KEY CODE", event.keyCode, event.charCode )
        //     this.update()
        // } 
    }
    handleAmountChange=(event, ID, species, location)=>{
        this.setState({
            amount: event.currentTarget.value,
            species,
            location,
            ID
        })
        // if(event.keyCode==13 || event.charCode == 13){
        //     console.log("KEY CODE", event.keyCode, event.charCode )
        //     this.update()
        // } 
    }
    handleKeyPress=(event)=>{
        console.log("UPDATE", this.state.species, this.state.location, this.state.amount, this.state.ID)
        if(event.keyCode==13 || event.charCode == 13){
            console.log("KEY CODE", event.keyCode, event.charCode )
            this.update()
        } 
    }
    update=()=>{
        // e.stopPropagation();
        // e.preventDefault();
        console.log("UPDATE", this.state.species, this.state.location, this.state.amount, this.state.ID)
        // onKeyPress={(e)=> this.handleSpeciesChange(e,item.ID, item.location, item.total)}
        const {updateFishData, getListData} = this.props
    
        updateFishData(this.state.species, this.state.location, this.state.amount, this.state.ID);
        getListData();
    }
    // table=()=>{
    //     console.log("this is your state", this.state)
    //     let species = this.props.data.data && this.props.data.data[0] ?
    //     this.props.data.data.map((item, i)=>
    //         <tr key={i}>
    //             <td><input type="text" onKeyPress={this.handleKeyPress} defaultValue={item.species} onChange={(e)=> this.handleSpeciesChange(e,item.ID, item.location, item.total)} className=''></input></td>
    //             <td><input type="text" onKeyPress={this.handleKeyPress} defaultValue={item.location} onChange={(e)=> this.handleLocationChange(e,item.ID,item.species, item.total)} className=''></input></td>
    //             <td><input type="number" onKeyPress={this.handleKeyPress} defaultValue={item.total} onChange={(e)=> this.handleAmountChange(e,item.ID, item.species, item.location)} className=''></input></td>
    //             {/* <td><button onClick={this.update}className="small-btn blue-grey lighten-2 white-text"><i className="material-icons">edit</i></button><button onClick={(e) => this.delete(item.ID, e)} className=" red white-text"><i className="material-icons">delete</i></button></td> */}
    //             <td><button onClick={(e) => this.delete(item.ID, e)} className=" red white-text"><i className="material-icons">delete</i></button></td>
    //         </tr>
    //         ) : <tr>
    //                 <td>No recent catches</td>
    //             </tr>;

        
    //     return species
    // }
    table=()=>{
        console.log("this is your state", this.state)
        let species = this.props.data.data && this.props.data.data[0] ?
        this.props.data.data.map((item, i)=>
            <tr key={i}>
                <td><input type="text" onKeyPress={this.handleKeyPress} defaultValue={item.species} onChange={(e)=> this.handleSpeciesChange(e,item.ID, item.location, item.total)} className=''></input></td>
                <td><input type="text" onKeyPress={this.handleKeyPress} defaultValue={item.location} onChange={(e)=> this.handleLocationChange(e,item.ID,item.species, item.total)} className=''></input></td>
                <td><input type="number" onKeyPress={this.handleKeyPress} defaultValue={item.total} onChange={(e)=> this.handleAmountChange(e,item.ID, item.species, item.location)} className=''></input></td>
                {/* <td><button onClick={this.update}className="small-btn blue-grey lighten-2 white-text"><i className="material-icons">edit</i></button><button onClick={(e) => this.delete(item.ID, e)} className=" red white-text"><i className="material-icons">delete</i></button></td> */}
                <td><button onClick={(e) => this.delete(item.ID, e)} className=" red white-text"><i className="material-icons">delete</i></button></td>
            </tr>
            ) : <tr>
                    <td>No recent catches</td>
                </tr>;

        
        return species
    }
    
    delete=(item, e)=>{
        e.preventDefault();
        e.stopPropagation();
        const {deleteFishData, getListData} = this.props
        console.log("its in delete", item)
        deleteFishData(item);
        getListData();
    }
    render(){
        return(
        this.props.data.data &&  this.props.data.data[0] ?
        <div className="container background">
            <table className="highlight centered responsive-table .hide-on-med-and-down .hide-on-large-only">
                    <thead>
                    <tr>
                        <th>Species</th>
                        <th>Location</th>
                        <th>Amount</th>
                        <th>Operations</th>
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