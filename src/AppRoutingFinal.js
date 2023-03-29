import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import NofoundPage from "./pages/404/NofoundPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashBoard from "./pages/dashboard/DashBoard";

 function AppRoutingFinal() {
  let loggedIn= true;
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
    {
      loggedIn ?
      (<Redirect from="/" to='/dashboard'/>)
      :
      (<Redirect  from="/" to='/login'/>)

    }
        </Route>

        <Route exact path='/register' component={ RegisterPage } />
        <Route exact path='/login' component={LoginPage} />

        <Route exact path='/dashboard'>
    {
      loggedIn ?
      (<DashBoard> </DashBoard>)
      :
      (<Redirect  from="/" to='/login'/>)

    }
        </Route>

        <Route component={ NofoundPage } />
      </Switch>

    </Router>
  );
}

export default AppRoutingFinal;
