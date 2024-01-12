import React, { useEffect, useState } from 'react'
import './Nav.css'






function Nav() {
const [show , handleShow] = useState(false);

//   we need to add scroll listner
//  so  use useEffect which will execute when some condition applies
   useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){///>100px
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
         window.removeEventListener("scroll", ()=>{
            
         } );
        };
   }, []);
     
   


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
        alt="Netflix Logo" />


        <img 
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
        />
    </div>
  )
}

export default Nav