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
import Edit from './components/edit/Edit';
import MyReviews from './components/my-reviews/MyReviews';
import Details from './components/details/Details';
import Home from './components/home/Home';

import AuthGuard from './components/guards/AuthGuard';
import ReviewGuard from './components/guards/ReviewGuard';

import { AuthProvider } from './contexts/authContext';

import Paths from './utils/paths';

import "/index.css";

function App() {

  return (
    <AuthProvider>
      <Header />
      <div className='app'>
        <Routes>
          <Route path={Paths.Home} element={<Home />}/>
          <Route path={Paths.Reviews} element={<Reviews />} />
          <Route path={`${Paths.Details}/:id`} element={<Details />} />
          <Route path={Paths.About} element={<About />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Register} element={<Register />} />
          <Route path={Paths.NotFound} element={<NotFound />} />
          <Route element={<AuthGuard />}>
            <Route path={Paths.Logout} element={<Logout />} />
            <Route path={Paths.Mine} element={<MyReviews />} />
            <Route path={Paths.Add} element={<Add />} />
            <Route element={<ReviewGuard />}>
              <Route path={`${Paths.Edit}/:id`} element={<Edit />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  )
}

export default App;
