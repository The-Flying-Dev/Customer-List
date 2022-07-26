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

  addNewCustomer(customer) {
    this.setState({
      customers: this.state.customers.concat(customer)
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
        <Customers customers={this.state.customers} />
      </div>      
    )
  }
}

export default Main;
