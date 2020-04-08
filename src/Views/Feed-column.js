import React from 'react';
import physics from '../Icons/physics.png';
import Chemistry from '../Icons/Chemistry.png';
import Computer from '../Icons/ComputerLab.png';
import Electrical from '../Icons/ElectricalLab.png';
import Concerned from '../Icons/Department.png';
import Hostel from '../Icons/Hostel.png';
import MI from '../Icons/MI.png';
import Admin from '../Icons/Admin.png';
import Career from '../Icons/Career.png';
import Library from '../Icons/Library'

function FeedColumn(){
    return(
        <div className="column-container">
            <div className="icons-wrapper">
            <div className="column-physics-icon-wrapper">
                <img src={physics} alt="Nothingmuch here" />
                <span className="span-text">Physics Lab</span>
            </div>

            
             <div className="column-chemistry-icon-wrapper">
                <img src={Chemistry} alt="Nothingmuch here" />                
                <span className="span-text">Chemistry Lab</span>
            </div>

            <div className="column-cpLab-wrapper">
                <img src={Computer} alt="Nothingmuch here" />  
                <span className="span-text">Computer Programming Lab</span>
            </div>

            <div className="column-Electrical-workshop-wrapper">
                <img src={Electrical} alt="Nothingmuch here" />  
                <span className="span-text">Electical workshop Lab</span>
            </div>

            <div className="column-concerned-dept-wrapper">
                <img src={Concerned} alt="Nothingmuch here" />  
                <span className="span-text">Concerned Dept. Lab</span>
            </div>

            <div className="column-Hostel-wrapper">
                <img src={Hostel} alt="Nothingmuch here" />  
                <span className="span-text">Hostel</span>
            </div>

            <div className="column-MI-room-wrapper">
                <img src={MI} alt="Nothingmuch here" />  
                <span className="span-text">MI ROOM</span>
            </div>

            <div className="column-SEE-Manager-wrapper">
                <img  alt="Nothingmuch here" />  
                <span className="span-text">SEE-Manager</span>
            </div>

            <div className="column-Admin-wrapper">
                <img src={Admin} alt="Nothing much here" />  
                <span className="span-text">Admin Department</span>
            </div>

            <div className="column-CS-wrapper">
                <img src={Career} alt="Nothing much here" />  
                <span className="span-text">Career Services</span>
            </div>
            <div className="column-Library-wrapper">
                <img src={Library} alt="Nothing much here" />  
                <span className="span-text">Library</span>
            </div>
            </div>
        </div>
    );
}

export default FeedColumn;