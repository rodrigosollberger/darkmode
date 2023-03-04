import React, { useState } from 'react';
import { MainContent } from './MainContent.js';
import { Header } from './Header.js';


export function App() {
    // initialize state
    const [darkMode, setDarkMode] = useState('')
    const [largeFont, setLargeFont] = useState(false)
    return <div id='app' aria-label='app' className={darkMode === true ? 'dark' : 'light'} style={{fontSize: largeFont ? '24px' : '16px'}}/* edit className and add style */>
        {/* pass above-defined state as props */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} largeFont={largeFont} setLargeFont={setLargeFont}/>

        <aside>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Company</button>
        </aside>
        <MainContent />
        <footer></footer>
    </div>
}