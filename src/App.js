import "./App.css";

import { Product } from "./components/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { UserLogin } from "./components/UserLogin";
import { AdminLogin } from "./components/AdminLogin";
import { HomePage } from "./modules/HomePage";
import { Registration } from "./components/Registration";
import { Registration } from "./components/Registration";

import { User } from "./components/User";
import { Admin } from "./components/Admin";

// vehicle
function App() {
  return (
    <div className="body" style={{ height: "100vh" }}>
      <Router>
        {/** */}
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/employeelogin" exact>
            <UserLogin />
          </Route>
          <Route path="/adminlogin" exact>
            <AdminLogin />
          </Route>
          <Route path="/address" exact>
            <Address />
          </Route>
          <Route path="/register" exact>
            <Registration />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;