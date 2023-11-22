import { Route, Routes } from 'react-router-dom';

import NotFound from './components/not-found/NotFound';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import "/index.css";

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <Routes>
          <Route path='/' />
          <Route path='/reviews' />
          <Route path='/add' />
          <Route path='/about' element={<About />} />
          <Route path='/edit/:id' />
          <Route path='/login' />
          <Route path='/register' />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
