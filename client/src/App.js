import React, { Component } from 'react';

 class App extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: ''
 }

    handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value
      })
    }

    handleSubmit = (event) => {
     
    };


    render() {
      console.log(this.state)
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            id="firstName"
            placeholder="First Name"
            type="text"
            onChange={this.handleChange}/><br/>
             <input
            id="lastName"
            placeholder="Last Name"
            type="text"
            onChange={this.handleChange}/><br/>
             <input
            id="email"
            placeholder="Email"
            type="email"
            onChange={this.handleChange}/><br/>
            <input type="submit" value="Register"/>
          </form>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return  {
      user: state.user.user
    }
  }

export default App
