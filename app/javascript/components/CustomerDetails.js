import React, { Component } from 'react';

class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {
    if(this.state.editable) {
      let name = this.name.value
      let company = this.company.value
      let job = this.job.value 
      let id = this.props.customer.id
      let customer = {id: id, name: name, company: company, job: job}
      this.props.handleUpdate(customer)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.customer.name} /> : <h3>{this.props.customer.name}</h3>
    
    let company = this.state.editable ? <input type='text' ref={input => this.company = input} defaultValue={this.props.customer.company} /> : <p>{this.props.customer.company}</p>

    let job = this.state.editable ? <input type='text' ref={input => this.job = input} defaultValue={this.props.customer.job} /> : <p>{this.props.customer.job}</p>


    return (
      <div>
        {name}
        {company}
        {job}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.customer.id)}>Delete</button>
      </div>
    )
  }
}

export default CustomerDetails;