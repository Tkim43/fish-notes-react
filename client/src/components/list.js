import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form'
import { addListData } from '../actions'
import Form from './form.js'
import '../assets/css/list.scss';


class Notes extends Component {
    state ={
        show: false
    }
    // handleAddItem = async (values) => {
    //     console.log('Form', values)
    //     const{reset} = this.props;
    //     await addListData(values.Species, values.Location, values.Amount);
    //     reset('list');
    // }
    // renderInput(props){
    //     console.log("render input", props);
    //     return(
    //         <div className ={`input-field col ${props.size}`}>
    //             <input {...props.input} type="text" autoComplete ="off" />
    //             <label>{props.label}</label>
    //             <p className="red-text">{props.meta.touched && props.meta.error}</p>
    //         </div>
    //     );
    // }
    render(){
        console.log("list Props", this.props);
        // const required = value => (value || typeof value === 'number' ? undefined : 'Required')
        // const number = value =>
        // value && isNaN(Number(value)) ? 'Must be a number' : undefined
        // const { handleSubmit, reset } = this.props
        return(
            <div className="container">
                <h1 className="center monoFont">Fish Notepad</h1>
                <p className="center grey-text">Keep track of all your fish!</p>
                <Form/>
                {/* <form  className="col s5" onSubmit ={handleSubmit}>
                    <div className="row input-field">
                        <Field size="s12" validate={required} name="Species" label ="Species" component ={this.renderInput}></Field>
                    </div>
                    <div className="row input-field">
                        <Field size ="s12" validate={required} name="Location" label="Location" component={this.renderInput}></Field>
                    </div>
                    <div className="row input-field">
                        <Field size ="s12" validate={required} name="Amount" label="Amount" component={this.renderInput}></Field>
                    </div>
                    <div className="col s4">
                        <button className="btn blue" type="done" name="action">Add Item</button>
                        <button type="button" onClick={reset} className="btn red">Cancel</button>
                    </div>
                </form> */}
                <table>
                    <thead>
                    <tr>
                        <th>Species</th>
                        <th>Location</th>
                        <th>Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Yellowtail</td>
                        <td>Santa Monica Pier</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Yellowtail</td>
                        <td>Santa Monica Pier</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Yellowtail</td>
                        <td>Santa Monica Pier</td>
                        <td>10</td>
                    </tr>
                    </tbody>
                </table>

            </div>
                    );
    }
}


// function mapStateToProps(state){
//     return{
//         todos: state.list.all
//     }
// }

// export default connect(mapStateToProps, {
//     addListData,
// })(Notes);

// Notes = reduxForm({
//     form: 'list' 
// })(Notes)

export default Notes;


