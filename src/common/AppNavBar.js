import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <container-fluid>
    <Navbar sticky ="top" bg="danger" expand="lg" variant="dark">
      
      <Navbar.Brand as={Link} to="/">HOME
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/create-address">
            <div className="text-light"> Create Address</div>
          </Nav.Link>
          <Nav.Link as={Link} to="/list-address">
             <div className="text-light"> List Address</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/create-cart">
           <div className="text-light">Add Product</div>
          </Nav.Link>
          <Nav.Link as={Link} to="/list-cart">
           <div className="text-light">My Cart</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
   </Navbar>
   </container-fluid>

  );
}