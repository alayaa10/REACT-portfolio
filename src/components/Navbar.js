import "./NavbarStyles.css";

import React, {useState} from 'react'

import { FaBars, FaTimes } from "react-icons/fa";

function Navbar  ({currentPage, setCurrentPage}) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100) {
            setColor(true);
        } else {
           setColor(false); 
        }
    };

    window.addEventListener('scroll',changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        {/* <Link to ='/'>
            <h1>Portfolio</h1>
        </Link> */}
        <ul className={click ?"nav-menu active" : "nav-menu"}>
            <li>
                <a href="#Home" onClick={()=>setCurrentPage("Home")}>Home</a>
            </li>
            <li>
            <a href="#Project" onClick={()=>setCurrentPage("Project")}>Project</a>
            </li>
            <li>
            <a href="#About" onClick={()=>setCurrentPage("About")}>About</a>
            </li>
            <li>
            <a href="#Contact" onClick={()=>setCurrentPage("Contact")}>Contact</a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? ( 
               <FaTimes size={20} style={{color: "#fff"}} />
            ) : ( 
               <FaBars size={20} style={{color: "#fff"}} />
            )}
        </div>
    </div>
  );
};

export default Navbar;