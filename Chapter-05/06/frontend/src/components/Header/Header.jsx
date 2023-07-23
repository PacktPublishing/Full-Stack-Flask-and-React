import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">

        <div className="logo">Bizza</div>
        <nav className="nav">
          <ul>
		  <li><Link to="/" className='navlink'>Home</Link></li>
            <li><Link to="/about" className='navlink'>About</Link></li>
            <li><Link to="/speakers" className='active navlink'>Speakers</Link></li>
            <li><Link to="/events" className='navlink'>Events</Link></li>
            <li><Link to="/sponsors" className='navlink'>Sponsors</Link></li>
            <li><Link to="/contact" className='navlink'>Contact</Link></li>
          </ul>
        </nav>
        <div className="auth">
          <button className="btn">Login</button>
        </div>
    </header>
  );
}

export default Header;
