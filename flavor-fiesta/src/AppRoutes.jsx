import { Routes, Route} from "react-router-dom";
import HeaderContainer from "./component/layout/header/HeaderContainer";
import Home from './Home';
import './AppRouter.css'



const AppRoutes =()=>{

    return (
        <Routes>
          <Route element={<HeaderContainer />}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={null} />
            <Route path="/categories" element={null} />
            <Route path="/faqs" element={null} />
            <Route path="/contact" element={null} />
          </Route>
        </Routes>
      );
    };

export default AppRoutes;