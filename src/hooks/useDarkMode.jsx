import React, { useState } from 'react'

export const useDarkMode = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);
    
    const switchTheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }

    return {isDarkMode,switchTheme};
}