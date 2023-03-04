import React from 'react';

export function Header({darkMode, setDarkMode, largeFont, setLargeFont}) {
    // pull out props
    
    return <header>
        <h1>ABC Inc.</h1>
        <div>
            {/* attach click handler */}
            <button className="material-icons" onClick = {() => setDarkMode(!darkMode)}>
                {/* conditionally render light icon */}
                {darkMode === true ? <p>light_mode</p> : <p>dark_mode</p>}
            </button>
            {/* attach click handler */}
            <button className="material-icons" onClick = {() => setLargeFont(!largeFont)}>
                text_fields
            </button>
        </div>
    </header>
}