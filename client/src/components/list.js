import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import '../assets/css/list.scss';

class List extends Component {
    renderInput(props){

        console.log("render input", props);
        return(
            <div className ={`input-field col ${props.size}`}>
                <input {...props.input} type="text" autoComplete ="off" />
                <label>{props.label}</label>
                <p className="red-text">{props.meta.touched && props.meta.error}</p>
            </div>
        );
    }
    handleAddItem = async (values) => {
        console.log('Form', values)
        // await this.props.addToDoItem(values);
        // // how to programmatically redirect a page
        this.props.history.push('/');
    }
    render(){
        console.log("list Props", this.props);
        const { handleSubmit, reset } = this.props;
        return(
            <div>
                <h1 className="center">Fish Notepad</h1>
                <p className="center grey-text">Keep track of all your fish!</p>
            <div>
                <form  className="col s5" onSubmit ={handleSubmit(this.handleAddItem.bind(this))}>
                    <div className="row input-field">
                        {/* <i className="small material-icons">pets</i> */}
                        <Field size="s12" name="Species" label ="Species" component ={this.renderInput}></Field>
                    </div>
                    <div className="row input-field">
                        {/* <i className="small material-icons">location_on</i> */}
                        <Field size ="s12" name="Location" label="Location" component={this.renderInput}></Field>
                    </div>
                    <div className="row input-field">
                        {/* <i className="small material-icons">trending_up</i> */}
                        <Field size ="s12" name="Amount" label="Amount" component={this.renderInput}></Field>
                    </div>
                    <div className="col s4">
                        <button className="btn blue">Add Item</button>
                        <button type="button" onClick={reset} className="btn red">Cancel</button>
                    </div>
                </form>
                        </div>
                        </div>
                    );
    }
}


// function mapStateToProps(state){
//     return{
//         todos: state.list.all
//     }
// }

export default reduxForm({
    form: 'list'
})(List);

