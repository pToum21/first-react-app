import Card from 'react-bootstrap/Card';

function Cars() {
    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                {/* nissan 350z */}
                <div className="col-md-6 mb-4">
                    <Card style={{ background: '#1a1a1a', color: 'white' }}>
                        <Card.Img
                            variant="top"
                            src="https://o.aolcdn.com/images/dims3/GLOB/crop/1134x638+92+167/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/9e89d6b15aebcccc53a6c924cadf622e/202461782/ff-nissan350z.jpg"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Text style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                The Nissan 350Z (known as Nissan Fairlady Z (Z33) in Japan) is a two-door, two-seater sports car that was manufactured by Nissan Motor Corporation from 2002 until 2009 and marks the fifth generation of Nissan's Z-car line. The 350Z entered production in 2002 and was sold and marketed as a 2003 model from August 2002. The first year there was only a coupe, as the roadster did not debut until the following year. Initially, the coupe came in Base, Enthusiast, Performance, Touring, and Track versions, while the Roadster was limited to Enthusiast and Touring trim levels. The Track trim came with lightweight wheels and Brembo brakes, but its suspension tuning was the same as all other coupes. The Nissan 350Z was succeeded by the 370Z for the 2009 model year.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* poresche */}
                <div className="col-md-6 mb-4">
                    <Card style={{ background: '#1a1a1a', color: 'white' }}>
                        <Card.Img
                            variant="top"
                            src="https://www.ilusso.com/imagetag/1497/main/l/Used-2016-Porsche-911-GT3RS-GT3-RS-1681236681.jpg"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Text style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                The Porsche 911 GT3 is a high-performance homologation model of the Porsche 911 sports car. It is a line of high-performance models, which began with the 1973 911 Carrera RS. The GT3 has had a successful racing career in the one-make national and regional Porsche Carrera Cup and GT3 Cup Challenge series, as well as the international Porsche Supercup supporting the FIA F1 World Championship.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* benz truck */}
                <div className="col-md-6 mb-4">
                    <Card style={{ background: '#1a1a1a', color: 'white' }}>
                        <Card.Img
                            variant="top"
                            src="https://www.usatoday.com/gcdn/-mm-/fd55f3615a822abaace32e9c793bfb122480bc05/c=1219-2063-5737-4616/local/-/media/2017/03/01/USATODAY/USATODAY/636239785468297609-mb1.jpg"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Text style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                Daimler, parent of Mercedes-Benz, says it is bringing the latest concept version of its first pickup to the Geneva Motor Show later this month as a luxury midsize model.

                                When it hits showrooms later this year, X-Class will be sold in what Mercedes says are a bunch of "key markets," and the U.S. isn't included (for the moment). They are Argentina, Brazil, South Africa, Australia with New Zealand and Europe.

                                "With the Mercedes-Benz pickup, we will close one of the last gaps in our portfolio," said Dieter Zetsche, Daimler's chairman and head of Mercedes-Benz Cars. "The X-Class will set new standards in a growing segment."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* skyline */}
                <div className="col-md-6 mb-4">
                    <Card style={{ background: '#1a1a1a', color: 'white' }}>
                        <Card.Img
                            variant="top"
                            src="https://cdn.motor1.com/images/mgl/2NZgLx/s1/nissan-gt-r-r32-ev-conversion.jpg"
                            style={{ height: '300px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                            <Card.Text style={{ maxHeight: '150px', overflow: 'hidden' }}>
                                Nissan took many by surprise at the end of last month when it announced plans to convert a GT-R from the R32 generation into an electric vehicle. A new walkaround video published on Twitter by the company's Japanese division fully reveals the sports car in its current state, right before losing the oily bits. As with all Skyline models produced during the 1989-1993 era, it's a right-hand-drive example, and this one comes in the two-door body style.

                                The R32 EV project is still in its infancy and will come to life following an engineer's idea to give the classic Skyline an electric powertrain. The higher-ups at Nissan approved the build, which will involve yanking off the RB26, a twin-turbo inline-six engine that made 276 horsepower (206 kilowatts) and 271 pound-feet (368 Newton-meters) of torque. Well, at least on paper.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Cars;
