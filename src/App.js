import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home/Home';
import Orders from './Components/Home/Orders/Orders';
import Services from './Components/Home/Services/Services';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Nav from './Components/Shared/Nav/Nav';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/orders/:ordersId' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        } />
        <Route path='/blogs' element={ <Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
