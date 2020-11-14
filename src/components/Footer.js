import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faTwitter,faGithub,faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul className="list-unstyled social">
                    <li>
                        <FontAwesomeIcon icon={faFacebook } />
                    </li>
                    <li>
                        
                        <FontAwesomeIcon icon={faTwitter } />
                    </li>
                    <li>
                        
                        <FontAwesomeIcon icon={faInstagram } />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub } />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin } />
                    </li>
                </ul>
            </div>
                
        </div>
    )
}

export default Footer
