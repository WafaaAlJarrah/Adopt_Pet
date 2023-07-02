import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../Images/Main Home/logo.png';
import '../App.css';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>
            <Container>
                <img src={Logo} className="LogoImage" width="100" height="100" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" style={{ color: "#fff", fontSize: "20px", paddingRight: "40px" }}> Home </Nav.Link>
                        <Nav.Link href="#about" style={{ color: "#fff", fontSize: "20px", paddingRight: "40px" }}> About </Nav.Link>
                        <Nav.Link href="/Profile" style={{ color: "#fff", fontSize: "20px", paddingRight: "40px" }}> Profile </Nav.Link>
                        <Nav.Link href="/Contact" style={{ color: "#fff", fontSize: "20px", paddingRight: "40px" }}> Contact </Nav.Link>
                        <NavDropdown title="Account" id="collasible-nav-dropdown" style={{ color: "#fff", fontSize: "20px" }}>
                            <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="/SignUp"> Sign Up </NavDropdown.Item>
                            <NavDropdown.Item href="/Admin"> Admin </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;