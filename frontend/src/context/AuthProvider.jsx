import axios from 'axios';
import React, { useContext,createContext, useState, useEffect } from 'react';
// import url from './utils/url';
const AuthContext = createContext({});

export function AuthProvider({ children }){
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState({});
  const saveUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      // const { data } = await axios.get(`/api/v1/users/showMe`);
      saveUser(data.user);
    } catch (error) {
      removeUser();
    }
    setIsLoading(false);
  };

  const logoutUser = async () => {
    try {
      // await axios.delete('/api/v1/auth/logout');
      removeUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return(<>
    <AuthContext.Provider
      value={{
        isLoading,
        auth,
        setAuth,
        user,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  </>
  )};
// make sure use
export default AuthContext;
export function useAuth(){
  return useContext(AuthContext);
};


