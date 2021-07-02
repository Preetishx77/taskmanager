import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import fire from './firebase';

import DashBoard from './components/Dashboard';
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<DashBoard/>) : (<Login/>)}
      </div>
    );
  }
}

export default App;
