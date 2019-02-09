import React, { Component} from 'react'
import {connect} from 'react-redux'
import { getListData, deleteFishData, updateFishData } from '../actions'

class FishRow extends Component {

    state = {
        isEditable: false,
        fishInfo: {}
    }

    delete=()=>{
        const {ID} = this.state.fishInfo;
        const {deleteFishData, getListData} = this.props
        deleteFishData(ID);
        getListData();
    }

    componentDidMount() {
        this.setState({
            fishInfo: {...this.props.fishInfo}
        });
    }


    displayStatic() {
        const { species, location, total, ID } = this.state.fishInfo;

        return (
            <tr>
                <td className="">{species}</td>
                <td className="">{location}</td>
                <td className="">{total}</td>
                <td>
                    <button className="white-text btn grey darken-2" onClick={this.toggleFishEdit}>Edit</button>
                    <button onClick={this.delete} className="btn red white-text"><i className="material-icons">delete</i></button>
                </td>
            </tr>
        )
    }

    displayEdit() {
        const { species, location, total } = this.state.fishInfo;

        return(
            <tr>
                <td><input name="species" onChange={this.handleInputChange} value={species} /></td>
                <td><input name="location" onChange={this.handleInputChange} value={location} /></td>
                <td><input name="total" onChange={this.handleInputChange} value={total} /></td>
                <td>
                    <button className="white-text btn green lighten-2" onClick={this.handleEdit}>Save</button>
                    <button className="red btn white-text" onClick={this.toggleFishEdit}><i className="material-icons">close</i></button>
                </td>
            </tr>
        )
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        const { fishInfo } = this.state;

        this.setState({
            fishInfo: {
                ...fishInfo,
                [name]: value
            }
        });
    }

    // handleKeyPress=(event)=>{
    //         if(event.keyCode==13 || event.charCode == 13){
    //             this.toggleFishEdit();
    //             console.log("KEY CODE", event.keyCode, event.charCode )
    //             const {updateFishData, getListData} = this.props
    //             updateFishData(species, location, total, ID);
    //             getListData();
    //         } 
    // }

    handleEdit = (e) => {
        // e.preventDefault();
        this.toggleFishEdit();
        const { species, location, total, ID} = this.state.fishInfo;
        console.log("THIS IS EDIT", species, location, total, ID)
        // Call our action to submit data from this.state.fishInfo to our endpoint
        const {updateFishData, getListData} = this.props
        updateFishData(species, location, total, ID);
        // Call our action to get the new data from the database to update our table
        getListData();
    }

    toggleFishEdit = () => {
        const { isEditable } = this.state;

        this.setState({
            isEditable: !isEditable
        });
    }

    render() {
        const { isEditable } = this.state;

        const row = isEditable ? this.displayEdit() : this.displayStatic();

        return (
            row
        )
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
})(FishRow);
