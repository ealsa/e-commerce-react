import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const NavScrollExample = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <Navbar bg="white" expand="lg" className="navbar-light py-3 shadow-sm">
      <Container>
        <NavLink to="/home" className="navbar-brand fw-bold fs-4">
          LA COLLECTION
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <FaSignInAlt className="me-1" /> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <FaUserPlus className="me-1" /> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <FaShoppingCart className="me-1" /> Cart ({state.length})
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
