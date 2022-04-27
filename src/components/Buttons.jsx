import React from  "react";
import { useState } from "react";
import {Layout} from './Layout';
import {ThemeContext, themes} from './theme-context';

export const Buttons = () =>{
  const [theme, setTheme] = useState(themes.default);
  
  const DoDarkTheme = () =>{
     setTheme(themes.dark);
  }

  const DoLightTheme = () =>{
    setTheme(themes.light);
}

  return (
    <div>
      <div className="button_block">
      <button className="button1" onClick={DoDarkTheme}>Dark theme</button>
      <button className="button2" onClick={DoLightTheme}>Light theme </button>
    </div>
     <ThemeContext.Provider value={theme}>
    <Layout/>
    </ThemeContext.Provider>
    </div>
  
    
    
  );
}


