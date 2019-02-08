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
        // event.stopPropagation();
        // event.preventDefault();
        this.setState({
            species: event.currentTarget.value,
            location,
            amount: total,
            ID
        })
        // figure out why it never goes inside
        if(event.keyCode==13){
            console.log("its insdie")
            this.update   
        } 
    }
    handleLocationChange=(event, ID, species, total)=>{
        this.setState({
            location: event.currentTarget.value,
            species,
            amount: total,
            ID
        })
        if(event.keyCode=== 13){
            console.log("its insdie")
            this.update   
        } 
    }
    handleAmountChange=(event, ID, species, location)=>{
        this.setState({
            amount: event.currentTarget.value,
            species,
            location,
            ID
        })
        if(event.keyCode==13){
            this.update   
        } 
    }
    // handleKeyPress(target) {
    //     debugger;
    //     if(target.charCode==13){
    //       this.update   
    //     } 
    // }
    // setValues(species, location, total, ID){
    //     console.log("IT went here" , species, location, total, ID)
    //     this.setState({
    //         species,
    //         location,
    //         total,
    //         ID
    //     })
    // }
    update = (e)=>{
        const {updateFishData, getListData} = this.props
        updateFishData(this.state.species, this.state.location, this.state.amount, this.state.ID);
        getListData();
    }
    table=()=>{
        console.log("this is your state", this.state)
        let species = this.props.data.data && this.props.data.data[0] ?
        this.props.data.data.map((item, i)=>
        
            <tr key={i}>
                {/* <td  onChange={this.handleChange} className="">{item.species}</td>
                <td  onChange={this.handleChange} className="">{item.location}</td>
                <td  onChange={this.handleChange} className="">{item.total}</td> */}
                {/* {this.setValues(item.species, item.location, item.total, item.ID)} */}
                <td><input type="text" onKeyPress={(e)=> this.handleSpeciesChange(e,item.ID, item.location, item.total)} defaultValue={item.species} onChange={(e)=> this.handleSpeciesChange(e,item.ID, item.location, item.total)}className=''></input></td>
                <td><input type="text" defaultValue={item.location} onChange={(e)=> this.handleLocationChange(e,item.ID,item.species, item.total)} className=''></input></td>
                <td><input type="number" defaultValue={item.total} onChange={(e)=> this.handleAmountChange(e,item.ID, item.species, item.location)} className=''></input></td>
                <td><button onClick={this.update}className="small-btn blue-grey lighten-2 white-text"><i className="material-icons">save</i></button><button onClick={(e) => this.delete(item.ID, e)} className=" red white-text"><i className="material-icons">delete</i></button></td>
            </tr>
            ) : <tr>
                    <td>No recent catches</td>
                </tr>;

        
        return species
    }
    // showModal(){
    //     this.setState({
    //         edit: true
    //     })
    // }
    // edit=()=>{
    //     let edit = this.props.data.data.map((item, i)=>
    //         <div key={i}>
    //             <textarea onChange={((e)=> this.handleChange(e, item.ID))} value={item.species} className=""></textarea>
    //             <textarea  onChange={((e)=> this.handleChange(e, item.ID))} value={item.location} className=""></textarea>
    //             <textarea  onChange={((e)=> this.handleChange(e, item.ID))} value={item.total}className=""></textarea>
    //             <button className="small-btn blue-grey lighten-2 white-text"><i className="material-icons">save</i></button>
    //         </div>
    //         )

    //     return edit
    // }
    // edit=()=>{
    //     this.setState({
    //         edit: true
    //     })
    //     let species = this.props.data.data && this.props.data.data[0] ?
    //     this.props.data.data.map((item, i)=>
    //         <div key={i}>
    //             <div className="input-field">
    //             <label>
    //             <input  onChange={this.handleChange(event)} value={item.species}></input>
    //             </label>
    //             </div>
    //             <div className="input-field">
    //             <label>
    //             <input onChange={this.handleChange(event)} value={item.location}></input>
    //             </label>
    //             </div>
    //             <div className="input-field">
    //             <label>
    //             <input onChange={this.handleChange(event)} value={item.total}></input>
    //             </label>
    //             </div>
    //         </div>
    //         ) : "";
    //     return species
    // }
    delete=(item, e)=>{
        e.preventDefault();
        e.stopPropagation();
        const {deleteFishData, getListData} = this.props
        deleteFishData(item);
        getListData();
    }
    render(){
        // if(this.state.edit){
        //     return (
        //         <div className="basic-modal" onClick={this.hideModal}>
        //             <div onClick={e => e.stopPropagation()} className="basic-modal-content">
        //                 <div onClick={this.hideModal} className="basic-modal-close center">X</div>
        //                     <div>
        //                         <form className="col s12">
                                
        //                                 <div className = "row">
        //                                 {this.edit}
        //                                     <button onClick={this.hideModal} className="red btn waves-effect waves-light " type="button" name="action">
        //                                         No
        //                                     </button>
        //                                 </div>
        //                         </form>
        //                     </div>
        //             </div>
        //         </div>
        //     )
        // }
        
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