import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Info} from './Info';
import {Home} from './Home' 
import {Contact} from './Contact'

export class App extends React.Component{
  render(){
    return(
      <div>
        <h2>Hello</h2>
        <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path ="/info" component={Info}/>
          <Route path = "/contact"component={Contact}/>
        </Switch>
        </Router>
      </div>
    )
  }
}