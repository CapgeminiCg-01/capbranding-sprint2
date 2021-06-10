import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AddressUpsert } from "./components/AddressUpsert";
import { AddressList } from "./components/AddressList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";
import {Address} from "./modules/Address";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/Address">
         
        </Route>

        <Route path="/">
          <AddressList />
        </Route>

        <Route exact path="/">
          <AddressList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;