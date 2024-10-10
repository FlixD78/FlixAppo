// NavigationContext.js
import React, { createContext, useContext } from 'react';

// Create a context for navigation
const NavigationContext = createContext();

// Provider component
export const NavigationProvider = ({ children, navigation }) => {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook to use the navigation context
export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
