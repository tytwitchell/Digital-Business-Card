import React from 'react'
import ReactDOM from 'react-dom'

import Info from '/components/info.js'
import About from '/components/about.js'
import Interests from '/components/interests.js'
import Footer from '/components/footer.js'

function RenderHtml () {
    return (
        <body>
            <div className="content-container">
                <Info />
                <About />
                <Interests />
            </div>
            <Footer />
        </body>
    )
}

ReactDOM.render(<RenderHtml />, document.getElementById('root'))