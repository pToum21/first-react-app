import React from 'react';
import Card from 'react-bootstrap/Card';

function Cars() {
    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://o.aolcdn.com/images/dims3/GLOB/crop/1134x638+92+167/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/9e89d6b15aebcccc53a6c924cadf622e/202461782/ff-nissan350z.jpg"
                        />
                        <Card.Body>
                            <Card.Text>
                                The Nissan 350Z (known as Nissan Fairlady Z (Z33) in Japan) is a two-door, two-seater sports car that was manufactured by Nissan Motor Corporation from 2002 until 2009 and marks the fifth generation of Nissan's Z-car line. The 350Z entered production in 2002 and was sold and marketed as a 2003 model from August 2002. The first year there was only a coupe, as the roadster did not debut until the following year. Initially, the coupe came in Base, Enthusiast, Performance, Touring, and Track versions, while the Roadster was limited to Enthusiast and Touring trim levels. The Track trim came with lightweight wheels and Brembo brakes, but its suspension tuning was the same as all other coupes. The Nissan 350Z was succeeded by the 370Z for the 2009 model year.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    );
}

export default Cars;