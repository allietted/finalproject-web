import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function navMain() {
  return (
    <Navbar bg="light" expand="lg" className="nav" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Explore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/familyevents">Family Events</Nav.Link>
            <Nav.Link href="/dayparty">Day Party</Nav.Link>
            <Nav.Link href="/ladiesnight">Ladies Night</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navMain;