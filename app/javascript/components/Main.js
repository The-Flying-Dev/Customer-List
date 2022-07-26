import React, { Component } from 'react';
import AddCustomer from './AddCustomer';
import Customers from './Customers';

//using older React syntax
class Main extends Component {

  //declare initial state of customers
  constructor(props) {
    super(props);
    this.state = {
      customers: [] 
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewCustomer = this.addNewCustomer.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateCustomer = this.updateCustomer.bind(this)
  }

  handleFormSubmit(name, company, job) {
    let body = JSON.stringify({customer: {name: name, company: company, job: job} })
    fetch('http://localhost:3000/api/v1/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((customer) => {
      this.addNewCustomer(customer)
    })
  }

  //function to merge new customer to existing array and create new array
  addNewCustomer(customer) {
    this.setState({
      customers: this.state.customers.concat(customer)
    })
  }

  //receives customer's ID, sends Delete request to customer route with ID using fetch()
  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/customers/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.deleteCustomer(id)      
    })
  }

  deleteCustomer(id) {
    let newCustomers = this.state.customers.filter((customer) => customer.id !== id)
    this.setState({
      customers: newCustomers
    })
  }



  handleUpdate(customer) {
    fetch(`http://localhost:3000/api/v1/customers/${customer.id}`,{
      method: 'PUT',
      body: JSON.stringify({customer: customer}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.updateCustomer(customer)     
    })
  }

  updateCustomer(customer) {
    let newCustomers = this.state.customers.filter((f) => f.id !== customer.id)
    newCustomers.push(customer)
    this.setState({
      customers: newCustomers
    })
  }

  

   //lifecycle to fetch json data from Customers api controller
   componentDidMount() {
    fetch('/api/v1/customers.json')
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ customers: data }) });
  }

  //pass down props and state
  render() {
    return(
      <div>
        <AddCustomer handleFormSubmit={this.handleFormSubmit} />
        <Customers 
          customers={this.state.customers}  
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate} 
        />
      </div>      
    )
  }
}

export default Main;
