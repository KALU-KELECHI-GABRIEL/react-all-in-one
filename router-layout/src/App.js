import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import LoginLayoutRoute from "./layouts/LoginLayoutRoute";  
import DashboardLayoutRoute from "./layouts/DashboardLayout";  
  
/** Components **/  
import UserPage from './Components/UserPage';  
import LoginPage from './Components/LoginPage'  
  
/* 
   App 
 */  
class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/"><Redirect to="/layout1" /></Route>  
          <LoginLayoutRoute exact path="/layout1" component={LoginPage} />  
          <DashboardLayoutRoute exact path="/layout2" component={UserPage} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;   