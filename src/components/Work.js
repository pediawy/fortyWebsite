import React from 'react'
import Card from "./Card"
const Work = ({cssStyle}) => {

    return (
        <section className={cssStyle}>
            <div className="firstLine row">
                <Card
                    cssCard="workCard"
                    bootStrapCard="col-md-4 col-xs-6"
                    color="coral"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"
                >
                    Lorem Etiam Nullam
                </Card>
                <Card
                    cssCard="workCard"
                    bootStrapCard="col-md-8 col-xs-6"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"
                >
                    Lorem Etiam Nullam
                </Card>

            </div>
            <div className="secondLine row">
                <Card
                    cssCard="workCard"
                    bootStrapCard="col-md-8 col-xs-6"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"

                >
                    Lorem Etiam Nullam
                </Card>
                
                <Card
                    cssCard="workCard"
                    bootStrapCard="col-md-4 col-xs-6"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"

                >
                    Lorem Etiam Nullam
                </Card>
            </div>
            <div className="thirdLine row">
                <Card
                    cssCard="workCard"
                    bootStrapCard="col-md-4 col-xs-6"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"

                >
                    Lorem Etiam Nullam
                </Card>
                <Card
                    cssCard="workCard"
                    bootStrapCard="col-md-8 col-xs-6"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"
                >
                    Lorem Etiam Nullam
                </Card>
            </div>
        </section>
    )
}

export default Work
