import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div >    
            <div>
                <div className="navbar">
                    <div >
                        <h1 className="texttitp">Imagen</h1>
                    </div>  
                    <div className="navopt">
                        <NavLink  to="/">Home</NavLink>
                    </div>
                    <div className="navopt">
                        <NavLink  to="/PhrasalContainer">
                            Phrasals
                        </NavLink>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default NavBar;