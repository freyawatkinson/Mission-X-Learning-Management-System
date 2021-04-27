import React from 'react';
import {Logo, MaoriFlag, NZFlag} from '../Assets/Shared';
import '../Shared/NavBar/NavBar1.css'; 
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

function NavBar1 () {
    return (
        <div class="topNav_container">
         <div className="Logo">
                <img src={Logo} alt="Logo"/>
            <div className="NavLinks_container"/>
            <p href="a">HOME</p>
            <p href="a">FEATURES</p>
            <p href="a">TEACHERS</p>
            </div>
    
            <div class="rightLinks_container">
                 <div className="flags_container">
                    <h1>LANG</h1>
                   <img src={MaoriFlag} alt="maori flag" />
                   <img src={NZFlag} alt="NZ flag" />
               </div>
               <div className="login_container">
                   <div className="icon">  
                   <img src={AccountCircleSharpIcon} alt="icon"/>
                   </div>
                    </div>
                   <p href="LoginSignup">REGISTER | LOGIN </p>
               </div>
            </div>

   ) 
};

export default NavBar1
