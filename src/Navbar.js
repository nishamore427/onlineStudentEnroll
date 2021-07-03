import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Link ,useHistory } from 'react-router-dom';
// import './Navbar.css';



function Navbar() {
  let history = useHistory()
 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const clearToken = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user');
    history.push("/")
}

  return (
    <>
      <nav className='navbar22'>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu22 active' : 'nav-menu22'}>
      
          <li
            className='nav-item22'  
          >
            <Link
              to='/TnKsubTabs'
              className='nav-links22'
              onClick={closeMobileMenu}
            >
             Think And Play <i className='fas fa-caret-down' />
            </Link>
          </li>

          <li
            className='nav-item22'
          >
            <Link
              to='/dashboard'
              className='nav-links22'
              onClick={closeMobileMenu}
            >
            Dashboard <i className='fas fa-caret-down' />
            </Link>
           
          </li>
          <li className='nav-item22'>
            <Link
              to='/games'
              className='nav-links22'
              onClick={closeMobileMenu}
            >
             Fun-Games
            </Link>
          </li>

        
         

        </ul>
     
            <div onClick={clearToken}>
                <button className='btn111'>Logout</button>
            </div>
            <div >
              
                <img  src="//placekitten.com/50/50" className="avatar ImageAvatarForSetting"/>
              
            </div>
            <div>
              <ul>
                <li className='nav-item22'>
                  <Link
                    to='/setting'
                    className='nav-links22'
                    onClick={closeMobileMenu}
                  >
                    Settings
                  </Link>

                </li>
              </ul>
            </div>
      </nav>
    </>
  );
}

export  default Navbar;
