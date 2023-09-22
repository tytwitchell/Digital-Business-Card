import React from 'react'

export default function Interests(props) {
    return (
        <section className="interests-container">
            <h2 style={props.stylesColor} className="section-title">Interests</h2>
            <p style={props.stylesColor} className="section-p">Music producer. Mountain lover.  Self-starter. Dog person. Ex-coffee addict. Current matcha enthusiast. Concert goer. Inspired human. </p>
        </section>
    )
}