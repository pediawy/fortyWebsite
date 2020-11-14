import React from 'react'
import Button from "./Button"



const InfoBox = ({ title,
    buttonName="",
    buttonExist,
    children,
    onClick,
     bootStrapClasses,
    bootStrapPClasses,
    cssHeader="",
    cssText = ""
}) => {
    
    return (
        <div className="infoBox">
            <h3 className={cssHeader}>{title}</h3>
            <div className="row">

                <div
                    className={`${bootStrapPClasses} ${cssText}`}
                >
                    {children}
                </div>
            
                {buttonExist &&<Button
                    bootStrapClasses={bootStrapClasses}
                    buttonStyle="btn-white"
                    buttonSize="btn-medium"
                    onClick={onClick}
                >
                {buttonName}
                </Button>}
            </div>
        </div>
    )
}

export default InfoBox
