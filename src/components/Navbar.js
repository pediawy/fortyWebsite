import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import Menu from "./Menu"




window.onscroll= function(){
        const nav = document.querySelector(".navbar")
        if (window.pageYOffset  >400) {
            nav.style.position = "fixed"
            nav.style.backgroundColor="#2a2f4a"
        }
        else {
            nav.style.position = "absolute"
            nav.style.backgroundColor=""
        }
}

function Navbar() {
    const [click, setClick] = useState(false)

    const clickHamburger = () => {
        setClick(!click)

    }
    return (
        
        <nav className="navbar navbar-expand-md navbar-light ">
            <div className="navContainer">
                <div className="nav-logo text-left text-uppercase">
                    <span>forty</span> by pixelarity
                </div>
                {!click && <div className="nav-menu text-right text-uppercase"
                    onClick={clickHamburger}>
                    
                    <div className="nav-item nav-link" style={{ color: "#fff" }}>
                        menu <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>}
                
                
                
                     <Menu click={click} setClick={setClick} />
                    
                   
                
                
            </div>
        </nav>
    )
}

export default Navbar


