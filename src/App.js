import './App.css'

import { Component } from 'react';

import {Home} from './pages/Home'
import {Industrial} from './pages/Industrial'

import {Switch, Route} from 'react-router-dom'



class App extends Component {
//function App(){
  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route path= '/industrial' component={Industrial} />
          </Switch>
      </div>
    );
  } 
}

export default App;
