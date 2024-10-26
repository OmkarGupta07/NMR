import {LOGO_URL} from "../../src/utils/Constant"

const Header =() =>{
    return (
        <div className="header">
            <div className="logocontainer">
                <img className="foodlogo" src={LOGO_URL}/>
            </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



export default Header;

