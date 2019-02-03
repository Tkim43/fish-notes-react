import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import { addListData } from '../actions'
import Table from './table'
import '../assets/css/list.scss';


class List extends Component {
    state ={
        show: false
    }
    handleAddItem = async (values) => {
        console.log('Form', values)
        console.log("these are your props", this.props)
        const {reset} = this.props;
        await addListData(values.Species, values.Location, values.Amount);
        reset('notes');
    }
    // renderInput= (props)=>{
    //     console.log("render input", props);
    //     return(
    //         <div className ={`input-field col ${props.size}`}>
    //             <input {...props.input} type="text" autoComplete ="off" />
    //             <label>{props.label}</label>
    //             <p className="red-text">{props.meta.touched && props.meta.error}</p>
    //         </div>
    //     );
    // }
    renderInput = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
              ((error && <span className="red-text">{error}</span>) ||
                (warning && <span>{warning}</span>))}
          </div>
        </div>
      )
    render(){
        console.log("list Props", this.props);
        const required = (value) => value ? undefined : 'Required'
        const {handleSubmit , reset} =this.props
        return(
            <div className="container">
                <h1 className="center monoFont">Fish Notepad</h1>
                <p className="center grey-text">Keep track of all your fish!</p>
                <form  className="col s5" onSubmit ={handleSubmit(this.handleAddItem)}>
                    <div className="row input-field">
                        <Field size="s12" type="text"
                        name="Species" label ="Species" component ={this.renderInput}></Field>
                    </div>
                    <div className="row input-field">
                        <Field size ="s12" type="text"
                        name="Location" label="Location" component={this.renderInput}></Field>
                    </div>
                    <div className="row input-field">
                        <Field size ="s12" type="number"
                        name="Amount" label="Amount" component={this.renderInput}></Field>
                    </div>
                    <div className="col s4">
                        <button className="btn blue" type="done" name="action">Add Item</button>
                        <button type="button" onClick={reset} className="btn red">Cancel</button>
                    </div>
                </form>
                <Table/>
            </div>
                    );
    }
}

function validate({ Species, Location, Amount}){
    const error = {};

    if(!Species) error.Species = 'Required';
    if(!Location) error.Location = 'Required';
    if(!Amount) error.Amount = 'Required';
    if(Amount && isNaN(Number(Amount))) error.Amount = 'Must be a number'
    return error;
}


export default reduxForm({
    form: 'list',
    validate
})(List)





