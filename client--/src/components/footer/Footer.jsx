import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TopBar from '../navbar/Navbar';

function Footer() {
    return (
        <Card className="text-center" bg="dark" expand="lg" variant="dark" text="white">
            <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                    {/* Add your text content here */}
                </Card.Text>
                <Button variant="outline-light" href="#nav" className="text-decoration-none">
                    Top of Page
                </Button>
            </Card.Body>
            <Card.Footer className="text-white">
                View A Car is designed to allow users to view popular cars and cool cars at the time. Any request can be sent via email to have it uploaded.
            </Card.Footer>
        </Card>
    );
}

export default Footer;
