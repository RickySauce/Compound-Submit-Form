import React, { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google';
import Form from './Form'

 class App extends Component {

  componentDidMount() {
    loadReCaptcha();
  }

    render() {
      return (
        <div>
          <Form/>
        </div>
      )
    }
  }

export default App
