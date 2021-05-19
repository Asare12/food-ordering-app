import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../componentsCss/Navigationbar.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigationbar() {
  return (
    <div>
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
            <Nav.Item>
              <Nav.Link href="/" className="custom-nav-link">
                Menu
              </Nav.Link>
            </Nav.Item>
            </LinkContainer>
            <Nav.Item>
              <Nav.Link href="/" className="custom-nav-link">
                My Cart
              </Nav.Link>
            </Nav.Item>
            
              <NavDropdown
                title="UserAccount"
                className="custom-nav-link"
                id="basic-nav-dropdown"
              >
                <LinkContainer to="/login"><NavDropdown.Item>Login</NavDropdown.Item></LinkContainer>
                <LinkContainer to="/signUp"><NavDropdown.Item>Sign Up</NavDropdown.Item> </LinkContainer>
              </NavDropdown>
           
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
          </Nav>
          {/* <Nav className="ml-auto mt-2 mt-lg-0">
        {isAuthenticated ? (
          <Nav.Item onClick={handleLogout}>
            <Nav.Link href="/" className="custom-nav-link">
              Logout
            </Nav.Link>
          </Nav.Item>
        ) : (
          <>
            <LinkContainer to="/login">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Login
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>

            <LinkContainer to="/signUp">
              <Nav.Item>
                <Nav.Link href="/" className="custom-nav-link">
                  Register
                </Nav.Link>
              </Nav.Item>
            </LinkContainer>
          </>
        )}
      </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

// function Navbar() {
//     // const [click, setClick] = useState(false);
//     // const [dropdown, setDropdown] = useState(false);
//     // const handleClick = () => setClick(!click);
//     // const closeMobileMenu = () => setClick(!click);
//     // const onMouseEnter = () => {
//     //     if(window.innerWidth < 960){
//     //         setDropdown(false);
//     //     }else {
//     //         setDropdown(true);
//     //     }
//     // };

//     // const onMouseLeave = () => {
//     //     if(window.innerWidth < 960){
//     //         setDropdown(false);
//     //     }else {
//     //         setDropdown(false);
//     //     }
//     // };

//     return (
//         <>
//         {/* <nav className='navbar'>
//             <Link to='/' className='navbar-logo'>
//                 EPIC
//             </Link>
//             <div className='menu-icon' onClick={handleClick}>
//                 <i className={click ? 'fas fa-times': 'fas fa-bars'} />
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className='nav-item'>
//                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                     <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
//                         Services <i className='fas fa-caret-down'/>
//                     </Link>
//                     {dropdown && <Dropdown />}
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
//                         Contact Us
//                     </Link>
//                 </li>
//                 <li className='nav-item'>
//                     <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
//                         Sign Up
//                     </Link>
//                 </li>
//             </ul>
//             <Button />
//         </nav> */}
//         </>
//     );
// }

// export default Navbar;
