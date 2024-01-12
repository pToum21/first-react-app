import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Footer() {
    return (
        <Card className="text-center" bg="dark" expand="lg" variant="dark" text="white">
            <Card.Body>
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    <Button variant="outline-light" href="#contact" className="text-decoration-none mb-2">
                        Contact Us
                    </Button>
                    <p>ViewACar</p>
                    <Button variant="outline-light" href="#nav" className="text-decoration-none mb-2">
                        Top of Page
                    </Button>
                </div>
            </Card.Body>
            <Card.Footer className="text-white">
                View A Car is designed to allow users to view popular cars and cool cars at the time. Any request can be sent via email to have it uploaded.
            </Card.Footer>
        </Card>
    );
}

export default Footer;
