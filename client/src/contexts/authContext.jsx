import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paths from "../utils/paths";
import * as authService from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
      localStorage.removeItem('accessToken');
      return {};
    });
  
    const loginSubmitHandler = async (values) => {
      //TODO: Error handling
      const result = await authService.login(values.email, values.password);
  
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
  
      navigate(Paths.Home);
    };
  
    const registerSubmitHandler = async (values) => {
      //TODO: Error handling
      const result = await authService.register(values.email, values.password, values.username);
  
      setAuth(result);
      localStorage.setItem('accessToken', result.accessToken);
  
      console.log(result);
      navigate(Paths.Home);
    };
  
    const logoutHandler = async () => {
      //TODO: Error handling
  
      await authService.logout();
  
      setAuth({});
      localStorage.removeItem('accessToken');
  
      navigate(Paths.Home);
    };
  
    const values = {
      logoutHandler,
      registerSubmitHandler,
      loginSubmitHandler,
      username: auth.username,
      isAuthenticated: !!auth.email
    };
  
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;