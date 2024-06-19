import { BrowserRouter as Routes, Route } from "react-router-dom";
import HeaderContainer from "./component/layout/header/HeaderContainer";
import Home from "./Home";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import "./AppRouter.css";
import About from "./component/Aboutus/About";
import SignUp from "./component/singUpForm/SignUp";
import Contact from "./component/ContactForm/Contact";
import ProductDetail from "./component/ProductDetail/ProductDetail"
import { AuthProvider } from './component/AuthContext/AuthContext';
import CartProvider from './component/CartContext/CartContext';
import CartPage from './component/CartPage/CartPage';
import PrivateRoute from './PrivateRoute';
import Search from "./component/Search/Search";
import Faqs from "./component/Faqs/FaqsPage";
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
          <Route path="/aboutus" element={<About/>} />
          <Route path="/faqs" element={<Faqs/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      <Footer />
    </div>
    </CartProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
