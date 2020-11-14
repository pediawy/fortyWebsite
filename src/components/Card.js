import React from 'react'
import InfoBox from './InfoBox'

const Card = ({cssCard,
    bootStrapCard,
    title,
    buttonExist,
    buttonName,
    cssHeader,
    cssText,
    children}) => {
    return (

        <div className={` ${cssCard} ${bootStrapCard}`}

        >

            <div className="infoBox-container">
                <InfoBox
                    title={title}
                    cssHeader={cssHeader}
                    cssText={cssText}
                    buttonExist={buttonExist}
                    buttonName={buttonName}
                >
                    {children}
                </InfoBox>
            </div>
        </div>
    )
}

export default Card
