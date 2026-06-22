import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import ProductDetails from './pages/ProductDetails/ProductDetails';


function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route  
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
