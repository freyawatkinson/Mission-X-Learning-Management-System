import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
    return(
        <div>
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/tweet'>Tweets</Link></button>
        </div>
    );
}

export default Nav;