import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./component/layout/header/HeaderContainer";
import Home from "./Home";
import Footer from "./component/Footer/Footer";
import Login from "./component/Login/Login";
import "./AppRouter.css";
import SignUp from "./component/singUpForm/SignUp";
import ProductDetail from "./component/ProductDetail/ProductDetail"
import { AuthProvider } from './component/AuthContext/AuthContext';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <AuthProvider>
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
        </Route>
      </Routes>
      <Footer />
    </div>
    </AuthProvider>
  );
};

export default AppRoutes;
