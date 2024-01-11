import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">ViewACar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Car Of The Day</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopBar;