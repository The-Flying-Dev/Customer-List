import React, { Component } from 'react';

class CustomerDetails extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.customer.name}</h3>
        <p>{this.props.customer.company}</p>
        <p>{this.props.customer.job}</p>
        <button onClick={() => this.props.handleDelete(this.props.customer.id)}>Delete</button> {/* pass customers ID from this component */}
      </div>
    )
  }
}

export default CustomerDetails;