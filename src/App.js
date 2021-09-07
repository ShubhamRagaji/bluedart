import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Alerts from "./Pages/Alerts/Alerts";
import Anpr from "./Pages/Anpr/Anpr";
import Logout from "./Pages/Logout/Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" strict exact>
            <Login />
          </Route>

          <Route path="/dashboard" strict exact>
            <Dashboard />
          </Route>

          <Route path="/anpr" strict exact>
            <Anpr />
          </Route>

          <Route path="/alerts" strict exact>
            <Alerts />
          </Route>

          <Route path="/logout" strict exact>
            <Logout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
