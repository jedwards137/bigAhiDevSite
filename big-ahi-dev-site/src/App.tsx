import React, { useState, useEffect } from 'react';
import './App.css';
import { UserPermissionsContext } from './context/UserPermissionsContext';
import { UserPermissions } from './model/UserPermissions.model';
import { usePermissions } from './services/permissions/usePermissions';
import { BigAhiDevAppContainer } from './containers/BigAhiDevAppContainer';
import DarkTheme from './BadCCL/themes/DarkTheme';
import LightTheme from './BadCCL/themes/LightTheme';
import { Theme, ThemeProvider, Typography } from '@material-ui/core';

const App = () => {
  const themes = { dark: DarkTheme, light: LightTheme };
  const [theme, setTheme] = useState<Theme>(LightTheme);
  const appPermissions = usePermissions();
  const [permissions, setPermissions] = useState<UserPermissions>(new UserPermissions());

  useEffect(() => {
    setPermissions(appPermissions.processPermissions());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserPermissionsContext.Provider value={{ permissions }}>
        <BigAhiDevAppContainer />
      </UserPermissionsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
