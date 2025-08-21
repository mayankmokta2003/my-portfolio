
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import React , {useRef} from "react";
export default function Navbar() {

  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
   menuRef.current.style.right="-350px";
  }





  return (
    <div className="navbar" id="hero">
      <div>
        <img src="./images/port.png" className="pic-1" />
        <img src="./images/menu.png" className="pic101" onClick={openMenu} />
      </div>

      <div className="main-text" ref={menuRef}>

      <img src="./images/cross.png" className="pic102" onClick={closeMenu}/>

        <AnchorLink className="anchor-link" href="#hero">
          <p className="text">Home</p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#about" offset={50}>
          <p className="text">About Me</p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#work" offset={-20}>
          <p className="text">Projects</p>
        </AnchorLink>
        <AnchorLink className="anchor-link" href="#contact" offset={-30}>
          <p className="text">Contact</p>
        </AnchorLink>
      </div>

      <div className="nav-end">
        <AnchorLink className="anchor-link" href="#contact" offset={-30}>
          <p>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  );
}
