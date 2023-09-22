import React from 'react'

export default function Footer(props) {
    return (
        <footer style={props.stylesFooter}>
            <img src="./images/github.png" className="social-links"/>           
            <img src="./images/location.png" className="social-links"/>
            <img src="./images/twitter.png" className="social-links"/>
        </footer>
    )
}