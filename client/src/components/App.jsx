import { Route, Routes } from 'react-router-dom';

import NotFound from './not-found/NotFound';
import About from './about/About';

import "/index.css";

function App() {
  return (
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
  )
}

export default App;
