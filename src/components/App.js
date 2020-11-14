import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Interface from "./Interface"
import Work from "./Work"
import Features from "./Features"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Footer from "./Footer"

import "./App.css"
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Route path="/" exact>
                <Interface
                    cssStyle="interface"
                    buttonExist
                    bootStrapPClasses="col-lg-4 col-md-12"
                    title="Hi, my name is Forty
                    ">
                    A ALIQUET DIAM ALIQUAM INTEGER AT CUBILIA
                    SED ALIQUAM LOREM DIS EGESTAS COMMODO.
                </Interface>
                <Work cssStyle="work" />
                <AboutUs cssStyle="aboutUs" title="Massa libero" buttonExist bootStrapPClasses ="col-lg-4 col-md-12">
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
                </AboutUs>
                <ContactUs />
                <Footer/>
            </Route>
            <Route path="/landing">
                <Interface
                    cssStyle="landing"
                    title="Landing"
                    buttonExist={false}
                    bootStrapPClasses ="col-lg-4 col-md-12"
                >
                    A ALIQUET DIAM ALIQUAM INTEGER AT CUBILIA
                    SED ALIQUAM LOREM DIS EGESTAS COMMODO.
                </Interface>
                <AboutUs cssStyle="aboutUs" title="Sed amet aliquam" buttonExist={false}>
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                </AboutUs>
                <Features/>
                <AboutUs cssStyle="aboutUs" title="Massa libero" buttonExist>
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.
                </AboutUs>
                <ContactUs />
                <Footer/>
            </Route>
            <Route path="/generic">
                <Interface cssStyle="generic" title="Generic"
                >
                    <div className="generic-img-container"></div>

                    <p>
                        Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.<br/><br/>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.<br/><br/>

                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
                    </p>
                </Interface>
                <ContactUs />
                <Footer/>
            </Route>
        </BrowserRouter>

    )
}

export default App
