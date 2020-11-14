import React from 'react'
import Card from "./Card"


const Features = () => {
    return (
        <section className="features">
            <div  className="firstLine row">
                <Card
                    cssCard="featPhotoCard"
                    bootStrapCard="col-md-4"
                    cssHeader="cardHeader"
                    cssText="cardText"
                >
                </Card>
                <Card
                    cssCard="featCard"
                    title="Aliquam"
                    bootStrapCard="col-md-8 "
                    cssHeader="cardHeader"
                    cssText="cardText"
                    buttonExist
                    buttonName="Learn More"
                >
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                </Card>

            </div>
            <div className="secondLine row">
                <Card
                    cssCard="featCard"
                    bootStrapCard="col-md-8"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"
                    buttonExist
                    buttonName="Learn More"
                >
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                </Card>
                <Card
                    cssCard="featPhotoCard"
                    bootStrapCard="col-md-4 col-xs-6"
                    cssHeader="cardHeader"
                    cssText="cardText"
                >

                </Card>
            </div>
            <div className="thirdLine row">
                <Card
                    cssCard="featPhotoCard"
                    bootStrapCard="col-md-4"
                    cssHeader="cardHeader"
                    cssText="cardText"

                >
                </Card>
                <Card
                    cssCard="featCard"
                    bootStrapCard="col-md-8"
                    title="Aliquam"
                    cssHeader="cardHeader"
                    cssText="cardText"
                    buttonExist
                    buttonName="Learn More"
                >
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                </Card>
            </div>
        </section>
    )
}

export default Features
