import {Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' />
        <Route path='/reviews' />
        <Route path='/add' />
        <Route path='/about' />
        <Route path='/edit/:id' />
        <Route path='/login' />
        <Route path='/register' />
        <Route path='*' element={ <NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
