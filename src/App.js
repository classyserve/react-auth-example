import React, { Component } from 'react';
import {Switch,Route,Link  } from 'react-router-dom';
import withAuth from './withAuth';
import Secret from './Secret';
import Login from './Login';
import SignUp from './SignUp';
import Verify from './Verify';

class App extends Component {
  render() {
    return (
      <div>
        
  
        <Switch>
          <Route path="/" exact component={withAuth(Secret)} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/verify/:email/:token" component={Verify} />
          

                    
        </Switch>
      </div>
    );
  }
}

export default App;
