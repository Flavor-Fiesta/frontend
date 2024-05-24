import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderContainer from "./component/layout/header/HeaderContainer";
import Home from './Home';
import Footer from './component/Footer/Footer';
import './AppRouter.css'



const AppRoutes =()=>{

    return (
      <div className="app-container">
        <Routes>
          <Route element={<HeaderContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={null} />
            <Route path="/categories" element={null} />
            <Route path="/faqs" element={null} />
            <Route path="/contact" element={null} />
          </Route>
        </Routes>
        <Footer />
      </div>
      );
    };

export default AppRoutes;