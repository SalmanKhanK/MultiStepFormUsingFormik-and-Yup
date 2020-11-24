import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import App from '../App'
  import {Login} from '../Component/Login'
  import {Signup} from '../Component/Signup'
export const Routers = () => {
    return (
        <div>
            <Router>
        <Switch>
           <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route path="*" component={()=><h2>404 Not Found</h2>}/>
        </Switch>

    </Router>
        </div>
    )
}
