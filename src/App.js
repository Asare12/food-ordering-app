import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import Form from "./components/Form";
import Profile from "./components/Profile";
import AddCategory from "./components/AddCategory"

import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import CategoryDataService from "./services/category.service";


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./componentsCss/Navigationbar.css";

import { LinkContainer } from "react-router-bootstrap";


function App() {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [categories, setCategories] = useState([]);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveCategory();
  }, []);

  const retrieveCategory = () => {
    CategoryDataService.getAll()
    .then((response) => {
      setCategories(response.data);
    })
    .catch((e) => {
        console.log(e);
    });
  };

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <Router history={history}>
      {/* <Navigationbar /> */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand className="custom-navbar-brand"> Logo</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="custom-navbar-nav">
            <LinkContainer to="/">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Home
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/menu">
              <NavDropdown title="Menu" id="navbarScrollingDropdown" className="custom-nav-link">
              {showAdminBoard && (<LinkContainer to="/addCategory"><NavDropdown.Item>Add</NavDropdown.Item></LinkContainer>)}
                {categories && categories.map((category) =>
                <NavDropdown.Item href="#action4">{category.name}</NavDropdown.Item>
                )}
            </NavDropdown>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Item>
                <Nav.Link className="custom-nav-link">
                  My Cart
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  About Us
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            {showAdminBoard && (
            <LinkContainer to="/admin">
              <Nav.Item>
                <Nav.Link  href="/" className="custom-nav-link">
                  Admin Board
                </Nav.Link>
              </Nav.Item>
              </LinkContainer>
            )}
            {currentUser && (
            <LinkContainer to="/user">
              <Nav.Item>
                <Nav.Link  href="/" className="custom-nav-link">
                  User
                </Nav.Link>
              </Nav.Item>
              </LinkContainer>
            )}
            {currentUser ? (
            <Nav className="custom-navbar-nav ml-auto">
            <LinkContainer to="/profile">
              <Nav.Item>
                <Nav.Link  href="/" className="custom-nav-link">
                {currentUser.email}
                </Nav.Link>
              </Nav.Item> 
            </LinkContainer>  

              <Nav.Item>
                <Nav.Link  href="/login" className="custom-nav-link" onClick={logOut}>
                LogOut
                </Nav.Link>
              </Nav.Item> 
              </Nav>
            ) : (
            <Nav className="custom-navbar-nav ml-auto">
            <LinkContainer to="/login">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Login/SignUp
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
            </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path={["/", "/home"]}component={Home} />
        <Route path="/login" component={Form} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/menu" component={Menu} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/user" component={BoardUser} />
        <Route path="/admin" component={BoardAdmin} />
        <Route exact path="/addCategory" component={AddCategory} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
