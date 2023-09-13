import React from 'react'

        //   <img src="./images/sun_moon.png" className="light-dark-img"/>
export default function Info() {
    return (
        <section className="info-container">
            <img src="./images/TTProPic.png" className="propic"/>
            <h1>Tyler Twitchell</h1>
            <h4>Frontend Developer</h4>
            <a href= "#" className="link-portfolio">tylertwitchell@website.com</a>
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