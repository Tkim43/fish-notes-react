// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// const required = value => value ? undefined : 'Required'
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

// const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type}/>
//       {touched && ((error && <span className="red-text">{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
//   </div>
// )

// const List = (props) => {
//   const { handleSubmit, reset } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <Field name="species" type="text"
//         component={renderField} label="Species"
//         validate={[ required ]}
//       />
//       <Field name="location" type="text"
//         component={renderField} label="Location"
//         validate={required}
//       />
//       <Field name="amount" type="number"
//         component={renderField} label="Amount"
//         validate={[ required, number ]}
//       />
//       <div className="col s4">
//           <button className="btn blue" type="done" name="action">Add Item</button>
//           <button type="button" onClick={reset} className="btn red">Cancel</button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({
//   form: 'list',
// })(List)