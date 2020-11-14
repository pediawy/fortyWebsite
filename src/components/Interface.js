import React from 'react'
import InfoBox from "./InfoBox"
const Interface = ({ cssStyle, children, buttonExist,title,bootStrapPClasses }) => {
    
    
    const handleClick = () => {
        if ( window.innerWidth <= 768) {
            window.scrollTo({
            top:410,
            behavior: 'smooth'
            })
        }
        window.scrollTo({
            top:550,
            behavior: 'smooth'
        })
    }

    return (
        <section className={cssStyle}>
            <InfoBox
                title={title}
                buttonName="GET STARTED ->"
                bootStrapPClasses={bootStrapPClasses}
                bootStrapBtnClasses="col-lg-3  col-md-12"
                buttonExist={buttonExist}
                onClick={handleClick}
            >
                 {children}
            </InfoBox>
        </section>
    )
}

export default Interface

