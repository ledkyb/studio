import React, { Component } from 'react';

class ErrorBoundry extends Component{
  constructor(){
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(){
    this.setState({ hasError: true });
  }

  render(){
    if(this.state.hasError){
      return(
        <div className="bg-white col col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <h2>Sorry, we couldn't load the team, please try again.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;