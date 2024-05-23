import { Routes, Route} from "react-router-dom";
import HeaderContainer from "./component/layout/header/HeaderContainer";



const AppRoutes =()=>{

    return (
        <Routes>
          <Route element={<HeaderContainer />}>
            <Route path="/" element={null} />
            <Route path="/store" element={null} />
            <Route path="/categories" element={null} />
            <Route path="/faqs" element={null} />
            <Route path="/contact" element={null} />
          </Route>
        </Routes>
      );
    };

export default AppRoutes;