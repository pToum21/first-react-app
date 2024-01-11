
import Figure from 'react-bootstrap/Figure';

function FirstArea() {
    return (
        <div className="container">
            <Figure className="my-5">
                <Figure.Image
                    width={1000} 
                    height={400} 
                    alt="171x180"
                    src="https://www.bmw-special-sales.com/content/dam/bmw/marketBMWCOM/bmw-special-sales_com/teaser-pool/medium/home/corporate2-sales.jpg"
                    fluid 
                />
                <Figure.Caption className="text-center">
                    The BMW eDrive technology in a plug-in hybrid combines three components to the cleanest and most efficient way of driving: an innovative electric drive, a lithium-ion high-performance battery, and an intelligent energy management. It will always choose the ideal driving mode for the best efficiency depending on battery charge level, speed, and route. Driving in the all-electric mode and with full-electric models like BMW iX, BMW i4, BMW iX3, or BMW i3/i3s is locally emission-free – and provides an impressive acceleration.
                </Figure.Caption>
            </Figure>
        </div>
    );
}

export default FirstArea;