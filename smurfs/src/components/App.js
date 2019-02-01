import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import { addSmurfs } from '../actions/index'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />

        <SmurfForm submit={this.props.addSmurfs}/>

      </div>
    );
  }
}

export default connect(null, { addSmurfs })(App);
