import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form'
import {Link, withRouter} from 'react-router-dom'
import { addListData, getListData} from '../actions'
import { connect } from 'react-redux';
import Table from './table'
import '../assets/css/list.scss';
import '../assets/css/modal.scss';


class List extends Component {
    state ={
        show: false
    }
    componentDidMount(){
        const {getListData} = this.props;
        getListData();
        // history.push('/notes');
    }
    handleAddItem =(values) => {
        console.log('Form', values)
        console.log("these are your props", this.props)
        const {reset, getListData, history} = this.props;
        addListData(values.Species, values.Location, values.Amount);
        reset('notes');
        getListData();
        // history.push('/notes');
    }
    showModal = () =>{
        this.setState({
            show: true,
        });
    }
    hideModal = () =>{
        this.setState({
            show: false,
            edit: false
        });
    }
    handleCancel = () =>{
        this.props.reset();
        this.setState({
            show: false,
        });
    }
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
        // if(this.props.data === undefined){
        //     return(
        //         <div className="preloader-wrapper big active">
        //         <div className="spinner-layer spinner-blue-only">
        //         <div className="circle-clipper left">
        //             <div className="circle"></div>
        //         </div><div className="gap-patch">
        //             <div className="circle"></div>
        //         </div><div className="circle-clipper right">
        //             <div className="circle"></div>
        //         </div>
        //         </div>
        //     </div>
        //     )
        // }
        if(this.state.show){
            return (
                <div className="basic-modal" onClick={this.hideModal}>
                    <div onClick={e => e.stopPropagation()} className="basic-modal-content">
                        <div onClick={this.hideModal} className="basic-modal-close center">X</div>
                            <div>
                                <form className="col s12">
                                        <div>
                                            <h6 className="">Are you sure you want to discard the changes you made?</h6>
                                        </div>
                                        <div className = "row">
                                            {/* <button onClick={this.} className="green lighten-2 btn waves-effect waves-light btn-large" type="done" name="action">
                                                Yes
                                            </button> */}
                                            <Link to={`/`} className="blue btn waves-effect waves-light " type="done" name="action">Yes</Link>
                                            <button onClick={this.handleCancel} className="red btn waves-effect waves-light " type="button" name="action">
                                                No
                                            </button>
                                        </div>
                                </form>
                            </div>
                    </div>
                </div>
            )
        }
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
                            <button type="button" onClick={this.showModal} className="btn red">Cancel</button>
                        </div>
                    </form>

                    <div className="section"></div>
                    <h4 className="monoFont turquoise center">Most Recent Catches</h4>
                    <Table/>
                    <section className="space"></section>
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

function mapStateToProps(state){
    const { list } = state;
    return {
        data: list,
    }
}

List = reduxForm({
    form: 'list',
    validate
})(List)

export default connect(mapStateToProps,{
    addListData,
    getListData
})(withRouter(List));





