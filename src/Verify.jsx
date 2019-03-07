import React, { Component } from 'react';

export default class Verify extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email : props.match.params.email,
      token: props.match.params.token
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/confirmation', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/login');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error verifying your email, please try again!');
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Verify by pressing the Button Below</h1>
       
        <input type="submit" value="Verify"/>
      </form>
    );
  }
}