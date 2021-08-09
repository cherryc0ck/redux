import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />  
        </Route>  
        <Route path="/detail">
          <Detail />  
        </Route>    
      </Switch>
    </BrowserRouter>
  )
}
export default App;