import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import "./HeaderStyle.css";
import logo from "./icons/logo.svg"; 
import { useState } from "react";
import DarkModeToggle from '../../DarkModeToggle/DarkModeToggle';
import SearchIcon from "./icons/SearchIcon.svg"; 
import DarkModeIcon from "./icons/DarkModeIcon.svg"; 
import CartIcon from "./icons/CartIcon.svg"; 
import UserIcon from "./icons/UserIcon.svg"; 


const HeaderLayout = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleClose();
    navigate('/login'); // Navega a la página de login
  };

  const handleSignUp = () => {
    handleClose();
    navigate('/signup'); // Navega a la página de registro
  };

  return (
    <Box component="header" className="Navbar">
      <Box className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
      </Box>
      <Box component="nav" className="navLink">
        <span onClick={() => navigate("/store")}>Tienda</span>
        <span onClick={() => navigate("/categories")}>Categorías</span>
        <span onClick={() => navigate("/faqs")}>FAQs</span>
        <span onClick={() => navigate("/contact")}>Contacto</span>
      </Box>
      <Box className="user-actions">
        <img src={SearchIcon} alt="Buscar" className="actionIcon" />
        <DarkModeToggle />
        <img src={DarkModeIcon} alt="Modo Oscuro" className="actionIcon" />
        <img src={CartIcon} alt="Carrito" className="actionIcon" />
        <IconButton color="inherit" onClick={handleUserIconClick}>
          <img src={UserIcon} alt="Usuario" className="actionIcon" />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem
            onClick={handleLogin}
            sx={{
              color: "#CC2D4A",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            Iniciar sesión
          </MenuItem>
          <MenuItem
            onClick={handleSignUp}
            sx={{
              color: "#CC2D4A",
              "&:hover": {
                opacity: 0.9,
              },
            }} >
            Crear cuenta
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}
export default HeaderLayout;