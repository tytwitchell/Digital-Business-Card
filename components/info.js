
import React from 'react'

export default function Info(props) {
    
    
    return (
        <section className="info-container">
            <div className="propic-container">
                <img src="./images/TTProPic.png" className="propic" />
                <img
                    src="./images/sun-and-moon.png"
                    className="light-dark-img"
                    onClick={props.toggleDarkMode}
                    style={props.stylesRotate}
                />
            </div>
            <h1 style={props.stylesColor}>Tyler Twitchell</h1>
            <h4 style={props.stylesColorAlt}>Frontend Developer</h4>
            <a 
                href= "#" 
                style={props.stylesColor}
                className="link-portfolio">tylertwitchell@website.com
            </a>
            <div className="link-container">
                <a href="mailto:tytwitchell@gmail.com" className="link-email">
                    <img src="./images/Mail.png" className="link-img"/>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/tytwitchell/" className="link-linkedin">
                    <img src="./images/linkedin.png" className="link-img"/>
                    LinkedIn
                </a>
            </div>
        </section>
    )
}