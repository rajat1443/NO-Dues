import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
    <div className="nav-wrapper">
         <div className="navbar-left-side">
            
            <div className="navbar-apply-wrapper">
            <Link to='/'> Apply for No Dues</Link>
            </div>
            
            <div className="navbar-response-wrapper">
               <Link to='/Response'>Response to your application</Link>
            </div>
    
        </div>
        
        <div className="navbar-right-side">
            <div className="navbar-xebia-brand-wrapper">
                UPES
            </div>
        </div>
        </div>
    )
}

export default Navbar;