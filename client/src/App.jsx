import { Route, Routes } from 'react-router-dom';

import NotFound from './components/not-found/NotFound';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Add from './components/add/Add';
import Logout from './components/logout/Logout';
import Reviews from './components/reviews/Reviews';

import { AuthProvider } from './contexts/authContext';

import Paths from './utils/paths';

import "/index.css";

function App() {

  return (
    <AuthProvider>
      <Header />
      <div className='app'>
        <Routes>
          <Route path={Paths.Home} />
          <Route path={Paths.Reviews} element={<Reviews />} />
          <Route path={Paths.Add} element={<Add />} />
          <Route path={`${Paths.Edit}/:id`} />
          <Route path={Paths.About} element={<About />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Logout} element={<Logout />} />
          <Route path={Paths.Register} element={<Register />} />
          <Route path={Paths.NotFound} element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  )
}

export default App;
