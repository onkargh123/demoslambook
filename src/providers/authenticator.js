import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();



export function AuthProvider(props) {
 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}} {...props} />;
}

export default function useAuthContext() {
  const context = useContext(AuthContext);
  /* istanbul ignore else */
  if (!context) {
    throw new Error('AuthContext  must be used with AuthProvider');
  }
  return context;
}
