
import React from 'react'
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faHome } from '@fortawesome/free-solid-svg-icons'


const ContactUs = () => {
    return (
        <section className="contactUs ">
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 col-sm-12">
                        <div className="contactForm">
                            <div className="contactName">
                                <label htmlFor="name" className="text-uppercase">Name</label>
                                <input
                                    type="text" id="name"
                                />
                            </div>
                            <div className="contactName">
                                <label htmlFor="Email" className="text-uppercase">Email</label>
                                <input
                                    type="text" id="Email"
                                />
                            </div>
                        </div>
                        <textarea> </textarea>
                        <div className="btnGroup">
                            <Button
                                buttonSize="btn-medium"
                                buttonStyle="btn-transparent"
                            >
                                Send Message
                            </Button>
                            <Button
                                buttonSize="btn-medium"
                                buttonStyle="btn-white"
                            >
                                Clear
                            </Button>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <ul className="list-unstyled contactInfo">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} /> <span>Email</span>
                                <p>information@untitled.tld</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} /> <span>Phone</span>
                                <p>(000) 000-0000 x12387</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faHome} /> <span>Address</span>
                                <p>1234 Somewhere Road #5432
                                    Nashville, TN 00000
                                    United States of America 
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
