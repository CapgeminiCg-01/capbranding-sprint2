import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";
import { AppNavBar2} from "./common/AppNavBar2";

function App() {
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

      <Switch>
        <Route path="/create-cart">
          <CartUpsert />
        </Route>

        <Route path="/list-cart">
          <CartList />
        </Route>

        <Route exact path="/">
          <CartList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;