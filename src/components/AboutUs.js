import React from 'react'
import InfoBox from './InfoBox'

const AboutUs = ({cssStyle,title,children,buttonExist}) => {
    return (
        <section className={cssStyle}>
            <div className="container">
                <InfoBox
                    title={title}
                    buttonName="GET STARTED ->"
                    header=""
                    buttonExist={buttonExist}
                >
                    {children}
            </InfoBox>

            </div>
            
        </section>
    )
}

export default AboutUs
