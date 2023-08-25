import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">

        <div className="logo">Bizza</div>
        <nav className="nav">
          <ul>
		  <li><Link to="/" className='navlink'>Home</Link></li>
          
            <li><Link to="/speakers" className='active navlink'>Speakers</Link></li>
   
          </ul>
        </nav>    
    </header>
  );
}

export default Header;
