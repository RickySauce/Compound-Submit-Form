import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'

 class Form extends Component {
    state = {
        token: '' 
    }
    
      componentDidMount() {
        fetch("https://api.ipify.org?format=json")
        .then(data => data.json())
        .then(json => console.log(json.ip))
        console.log(navigator.userAgent)
        if (this.captcha) {
            console.log("captcha mounted")
            this.captcha.reset();
            this.captcha.execute();
        }
      }

      handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
  
    
      onloadCallback = () => {
          console.log("loaded")
          if (this.captcha) {
              this.captcha.reset();
              this.captcha.execute();
              console.log("reset")
          }
      }
    
      verifyCallback = (token) => { 
        console.log(token)
        this.setState({token: token})
      }

      handleSubmit = (event) => {
          event.preventDefault()
          if(this.state.token){
              alert('You have successfully subscribed')
          } else{
              alert(' Please verify that you are a human')
          }
      }
    
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
             <ReCaptcha
                ref={(el) => {this.captcha= el;}}
                size="invisible"
                render="explicit"
                sitekey="6LcMPn8UAAAAAKtGBUJmgMUPO2Qwjmjfio5yw0lD"
                onloadCallback={this.onloadCallback}
                verifyCallback={this.verifyCallback}
            />
          </div>
        );
      };
  }

export default Form