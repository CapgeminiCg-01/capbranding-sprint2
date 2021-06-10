import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AddressUpsert } from "../components/AddressUpsert";
import { AddressList } from "../components/AddressList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "../common/AppNavBar";

export function Address() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/create-address">
          <AddressUpsert />
        </Route>

        <Route path="/list-address">
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