import { Component } from 'react';

import {Home} from './pages/Home'
import {Productos} from './pages/Productos'
import {Contacto} from './pages/Contacto'
import {Error} from './pages/Error'

import {Switch, Route} from 'react-router-dom'



class App extends Component {
//function App(){
  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route path= '/sillas' component={Productos} />
            <Route path= '/barreras' component={Productos} />
            <Route path= '/industrial' component={Productos} />
            <Route path= '/contacto' component={Contacto} />
            <Route component={Error} />
          </Switch>
      </div>
    );
  } 
}

export default App;
