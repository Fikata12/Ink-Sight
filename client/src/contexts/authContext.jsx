import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import Paths from "../utils/paths";
import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
  
    const loginSubmitHandler = async (values) => {
      //TODO: Error handling
      const result = await authService.login(values.email, values.password);
  
      setAuth(result);

      navigate(Paths.Home);
    };
  
    const registerSubmitHandler = async (values) => {
      //TODO: Error handling
      const result = await authService.register(values.email, values.password, values.username);
  
      setAuth(result);
  
      console.log(result);
      navigate(Paths.Home);
    };
  
    const logoutHandler = async () => {
      //TODO: Error handling
  
      await authService.logout();
  
      setAuth({});
      
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