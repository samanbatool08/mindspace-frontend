import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MindSpace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Log In</Nav.Link>
            <Nav.Link href="#link">Log Out</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Journal Entries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Your Journal Entries 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sleep Log</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;