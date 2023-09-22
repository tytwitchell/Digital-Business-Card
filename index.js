import React from 'react'
import ReactDOM from 'react-dom'

import Info from './components/info.js'
import About from './components/about.js'
import Interests from './components/interests.js'
import Footer from './components/footer.js'

function RenderHtml () {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    
    const stylesRotate = {
        transform: darkMode ? "none" : "rotate(180deg)",
        transition: 'transform 0.5s ease'
    }
    
    const styles = {
        backgroundColor: darkMode ? "#1A1B21" : "#F5F5F5"
    }
    
    const stylesColor = {
        color: darkMode ? "#FFFF" : "#2B283A" 
    }
    
    const stylesColorAlt = {
        color: darkMode ? "#F3BF99" : "#F47D27" 
    }
    
    const stylesFooter = {
        backgroundColor: darkMode ? "#161619" : "#D5D4D8" 
    }
    
    return (
        <div>
            <div className="content-container" style={styles}>
                <Info 
                    stylesColor={stylesColor}
                    stylesColorAlt={stylesColorAlt}
                    stylesRotate={stylesRotate}
                    toggleDarkMode={toggleDarkMode}/>
                <About stylesColor={stylesColor}  />
                <Interests stylesColor={stylesColor}  />
            </div>
            <Footer stylesFooter={stylesFooter}/>
        </div>
    )
}

ReactDOM.render(<RenderHtml />, document.getElementById('root'))