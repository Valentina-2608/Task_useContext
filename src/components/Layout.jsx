import React from  "react";
import {useContext} from 'react';
import {ThemeContext} from './theme-context';

export const Layout = () => {
  const themes = useContext(ThemeContext);
  return(
  <div className="result" style={themes}>
    {JSON.stringify(themes.text)};
  </div>
  );

}

