import { Scrollable } from "./Scrollable"
import React from 'react'
import Buy from '../assets/icons/Buy.png'
import { Link, animateScroll as scroll } from "react-scroll"

interface Active {
  active: boolean,
  setActive: any
}

const NavMenu: React.FC<Active> = ({active, setActive}) => {
  
      return (
        <div className={active ? 'hr' : 'none-active'}>
         <div className="scroll-container">
            <Scrollable _class='items'>
              <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Section1
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Section2
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Section3
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Section4
                  </Link>
                </li>
                <li className="nav-menu-item">
                  <Link
                    activeClass="active"
                    to="section5"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Section5
                  </Link>
                </li>
              </ul>    
            </Scrollable>
            <div className="second-item-inner">
              <img src={Buy} alt="error" />
              <hr className='first-hr' />
              <p>Корзина</p>
              <hr />
              <div className="ellipse">4</div>
            </div>
        </div>
        <hr />
      </div>
      )
}

export default NavMenu