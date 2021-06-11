import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import image from "./Images/Image1.jpeg";
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
            backgroundColor: "#b2ebf2",
          }}
        >
          <div className="col d-flex justify-content-center align-items-center" >
           <img src= {"image"} alt=""/>
            <Route exact path="/">
             <h1 class="text-dark" > Welcome To CapBrandingStore </h1>
            </Route>
            </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;