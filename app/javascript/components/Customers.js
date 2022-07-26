import React from 'react';
import CustomerDetails from './CustomerDetails';


const Customers = (props) => { 

  //setting new variable customers to customers state and looping through each attribute
  var customers = props.customers.map((customer) => {
    return(
      <div key={customer.id}>
        <CustomerDetails customer={customer} handleDelete={props.handleDelete} />
      </div>
    )
  })

    return(
      <div>        
        {customers}
      </div>
    )  
}

export default Customers;