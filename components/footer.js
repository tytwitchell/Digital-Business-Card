import React from 'react'

export default function Footer(props) {
    return (
        <footer style={props.stylesFooter}>
            <a 
                href="https://github.com/tytwitchell" 
                target="_blank" 
                rel="noopener noreferrer">
                    <img src="./images/github.png" className="social-links"/>
            </a>
            <a 
                href="https://www.google.com/maps/place/New+York,+NY/@40.6970193,-74.3093255,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu" 
                target="_blank" rel="noopener noreferrer">
                    <img src="./images/location.png" className="social-links"/>
            </a>
            <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer">
                    <img src="./images/twitter.png" className="social-links"/>
            </a>
        </footer>
    )
}