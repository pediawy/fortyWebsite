import React from 'react'
import {Link}from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {CSSTransition} from "react-transition-group"

import Button from "./Button"


        
    
function Menu({ click, setClick }) {

    const closeMenu = () => {
        setClick(!click)
    }
    return (
            <CSSTransition
                in={click}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
            <div className=" menu">
            <div className="overlay"></div>
            <div className="btnClose " onClick={closeMenu}>
                <FontAwesomeIcon icon={ faTimes}/>
            </div>
            <ul className="list-unstyled menu-list">
                <li className="list-item" >
                <Link to="/"onClick={closeMenu}>Home</Link>
            </li>
            <li className="list-item">
                <Link to="/landing"onClick={closeMenu}>Landing</Link>
            </li>
            <li className="list-item" >
                <Link to="/generic" onClick={closeMenu}>Generic</Link>
            </li>
                <Button
                    buttonStyle="btn-transparent"
                    buttonSize="btn-large"
                    onClick={closeMenu}
                >
                    Login
                </Button>
                <Button
                    buttonStyle="btn-white"
                    buttonSize ="btn-large"
                    onClick={closeMenu}
                >
                    Get Started
                </Button>
            </ul>
        </div>
        </CSSTransition>
    )
}

export default Menu
