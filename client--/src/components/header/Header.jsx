import './header.css';

const containerStyle = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    textAlign: "center",
    
}

const textContainerStyle = {
    textAlign: "left", 
    width: "70%",
    height: "auto"
}

const imgStyle = {
    width: "175px",
    height: "auto",
    boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.7)",
    opacity: 0.6,
}

function Header() {
    return (
        <div className='full-header' style={containerStyle}>
            <div style={textContainerStyle}>
                <h1 className="header-title">Buy a Car Today!</h1>
                <p className="header-desc">With the best prices on the west coast, BuyaCar meets all your needs</p>
            </div>
            <img style={imgStyle} src="https://www.shutterstock.com/image-vector/car-shop-shopping-logo-design-260nw-574467076.jpg" alt="buy a car logo" />
        </div>
    )
}

export default Header;