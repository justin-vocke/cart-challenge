import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
   
    </div>
  )
}

export default App
