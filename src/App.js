import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";
import { AddressUpsert } from "./components/AddressUpsert";
import { AddressList } from "./components/AddressList";
import { CartUpsert } from "./components/CartUpsert";
import { CartList } from "./components/CartList";

function App() {
  return (
    <Router>
      <div className="sticky-top"></div>
      <AppNavBar />
       

      <Switch>

        <Route path="/create-address">
          <AddressUpsert />
        </Route>

        <Route path="/list-address">
          <AddressList />
        </Route>
        
        <Route path="/create-cart">
          <CartUpsert />
        </Route>

        <Route path="/list-cart">
          <CartList />
        </Route>

        <div
          className="row"
          style={{
            height: "100vh",
            fontSize: "50px",
            backgroundColor: "#d9ecd0",
          }}
        >
          <div className="col d-flex justify-content-center align-items-center">
            <Route exact path="/">
              Welcome To CapBrandingStore
            </Route>
            </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;