// import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar'
// import Home from './components/Home';
import Pizzas from './components/Pizza';
import Footer from './components/Footer'
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState('home')

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);    
    setUsuarioRegistrado(null);
    setPage('home');
  };


  return (
    <>
      <div className='conteiner'>
        <div>
          <Navbar1 
            isLoggedIn={isLoggedIn}
            total={25000}
            onNavigate={setPage}
            onLogout={handleLogout}
          />
        </div>
        <div>
          {/* {page === 'home' && <Home />} */}
          <Pizzas />
          {page === 'register' && <Register setUsuarioRegistrado={setUsuarioRegistrado} />}
          {page === 'login' && <Login usuarioRegistrado={usuarioRegistrado} onLogin={handleLogin} />}
          {page === 'cart' && <Cart/>}
          {page === 'profile' && isLoggedIn && <div>Perfil del usuario</div>}        
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App