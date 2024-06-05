import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./component/layout/header/HeaderContainer";
import Home from "./Home";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import "./AppRouter.css";
import SignUp from "./component/singUpForm/SignUp";
import ProductDetail from "./component/ProductDetail/ProductDetail"
import { AuthProvider } from './component/AuthContext/AuthContext';
<<<<<<< HEAD
import CartProvider from './component/CartContext/CartContext';
import CartPage from './component/CartPage/CartPage';
import PrivateRoute from './PrivateRoute';
=======
import Search from "./component/Search/Search";
>>>>>>> 0ce933e607b87abfbf960744fb6fff5ad49a0f37

const AppRoutes = () => {
  return (
    <AuthProvider>
      <CartProvider>
    <div className="app-container">
      <Routes>
        <Route element={<HeaderContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/store" element={null} />
          <Route path="/categories" element={null} />
          <Route path="/faqs" element={null} />
          <Route path="/contact" element={null} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
          <Route path="/cart" element={<CartPage />} />
=======
          <Route path="/search" element={<Search />} />
>>>>>>> 0ce933e607b87abfbf960744fb6fff5ad49a0f37
        </Route>
      </Routes>
      <Footer />
    </div>
    </CartProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
