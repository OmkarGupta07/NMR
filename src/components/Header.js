import { LOGO_URL } from "../../src/utils/Constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [name, setName] = useState("LogIn");


useEffect(()=>{ 
    console.log('Rendering useffect');
 },[name])

    return (
        <div className="header">
            <div className="logocontainer">
                <img className="foodlogo" src={LOGO_URL} alt="Food Logo" />
            </div>
            <div className="navitems">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/About"> About Us </Link></li>
                    <li> <Link to="/Contact"> Contact Us </Link></li>
                    <li>Cart</li>
                  
                        <button 
                            className="login" 
                            onClick={() => { 
                                name === 'LogIn' ? setName('LogOut') :  setName('LogIn') }}
                        >
                            {name}
                        </button>
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;
