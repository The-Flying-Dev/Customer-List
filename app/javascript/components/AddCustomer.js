import React from "react";

const AddCustomer = (props) => {
  
  let formFields = {};

  return(
    
    <form onSubmit={ (e) => {
      e.preventDefault();
      props.handleFormSubmit(
        formFields.name.value,
        formFields.company.value,
        formFields.job.value
      );
      e.target.reset();}
      }>
      <input ref={input => formFields.name = input} placeholder="Enter customer's name" />
      <input ref={input => formFields.company = input} placeholder="Enter customer's company" />
      <input ref={input => formFields.job = input} placeholder="Enter customer's job" />
      <button>Submit</button>
    </form>
  )
}

export default AddCustomer;