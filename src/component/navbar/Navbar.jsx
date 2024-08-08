import React, { useState } from 'react';
import './Navbar.css';

// Import the images
import searchIcon from '../../assets/frontend_assets/search_icon.png';
import basketIcon from '../../assets/frontend_assets/basket_icon.png';

const Navbar = () => {
    const[menu,setMenu]=useState("contact-us");
  return (
    <div className='navbar'>
        <div className='img-logo'>
        {/* <img src="/src/assets/frontend_assets/tasty.jpg" alt=""className="logo" />  */}
        <h1>TastyTrek</h1>

        </div>
    
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="moblie-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={searchIcon} alt="search icon" />
        <div className="navbar-search-icon">
          <img src={basketIcon} alt="basket icon" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
