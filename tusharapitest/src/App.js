import React from 'react'
import './Main.css'
import Header from './Header'
import Postandputapi from './Postandputapi'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Getanddeleteapi from './Getanddeleteapi'
export default function App(){
    return(<div>
     <Router>
<Header/>
<Switch>
<Route path="/get" component={Getanddeleteapi} /> 
  <Route path="/post" component={Postandputapi}/> 
</Switch>

     </Router>
    </div>)
}