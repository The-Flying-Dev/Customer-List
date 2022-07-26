import React from 'react';


const Customers = (props) => { 
  
  //setting new variable customers to customers state and looping through each attribute
  var customers = props.customers.map((customer) => {
    return(
      <div key={customer.id}>
        <h2>{customer.name}</h2>
        <p>{customer.company}</p>
        <p>{customer.job}</p>
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