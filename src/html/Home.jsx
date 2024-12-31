import React, { useState } from 'react';
import { Link } from 'react-scroll';

import '../css/Home.css';

const Home = () => {
  const [ismbl, setIsmbl] = useState(false);

  return (
    <div>
      <header className={ismbl ? 'nav-mbl' : 'nav'} onClick={() => setIsmbl(false)}>
        <div className='me' style={{ paddingLeft: '20px' }}>
          <h2 className='name'>S Sowmiya</h2>
        </div>

        <div className='navbar'>
          <ul>
            <li><Link className="anchor-link" to="me1" smooth={true} offset={-50} duration={100} >Home</Link></li>
            <li><Link className="anchor-link" to="about" smooth={true} offset={-60} duration={100}>About</Link></li>
            <li><Link className="anchor-link" to="pro" smooth={true} offset={-60} duration={100}>Project</Link></li>
            <li><Link className="anchor-link" to="edu" smooth={true} offset={-60} duration={100}>Education</Link></li>
            <li><Link className="anchor-link" to="contact" smooth={true} offset={-60} duration={100}>Contact</Link></li>
          </ul>
        </div>
      </header>

      <div className="menu">
        <button onClick={() => setIsmbl(!ismbl)}>
          {ismbl ? <h3>X</h3> : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
