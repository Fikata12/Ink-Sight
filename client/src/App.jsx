import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import NotFound from './components/not-found/NotFound';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Add from './components/add/Add';

import AuthContext from './contexts/AuthContext';

import * as authService from './services/authService';

import Paths from './utils/paths';

import "/index.css";
import Logout from './components/logout/Logout';

function App() {
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
      <Header />
      <div className='app'>
        <Routes>
          <Route path={Paths.Home} />
          <Route path={Paths.Reviews} />
          <Route path={Paths.Add} element={<Add />} />
          <Route path={Paths.Edit} />
          <Route path={Paths.About} element={<About />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Logout} element={<Logout />} />
          <Route path={Paths.Register} element={<Register />} />
          <Route path={Paths.NotFound} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthContext.Provider>
  )
}

export default App;
