import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/BlueTechtonicaWord.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//Browser router which will actually help connect to the browser
//routes component which is going to be the parent for all our routes
//route, used to set up a single page

//mynavbar is child to RouterProvider
//all of the link components will affectively
//know the routing system of the router var from app.jsx

function MyNavBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutme" className="nav-link">
            About me
          </Link>
          <Link to="/blogs" className="nav-link">
            Blogs
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Yolisma Zacarias</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavBar;

// <LinkContainer to="/">
//           <Nav.Link>Home</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/aboutme">
//           <Nav.Link>About me</Nav.Link>
//         </LinkContainer>
