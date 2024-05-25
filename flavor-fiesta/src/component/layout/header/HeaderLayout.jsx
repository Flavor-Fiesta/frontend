import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import "./HeaderStyle.css";
import logo from "./icons/logo.svg";
import { useEffect, useState } from "react";
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";
import SearchIcon from "./icons/SearchIcon.svg";
import CartIcon from "./icons/CartIcon.svg";
import UserIcon from "./icons/UserIcon.svg";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleUserIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleClose();
    navigate("/login"); // Navega a la página de login
  };

  const handleSignUp = () => {
    handleClose();
    navigate("/signup"); // Navega a la página de registro
  };
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Box component="header" className="Navbar">
      <Box className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>
      </Box>

      <Box component="nav"  className={`navLink ${isMobile ? 'hidden' : ''}`}>
        <span onClick={() => navigate("/store")}>Tienda</span>
        <span onClick={() => navigate("/categories")}>Categorías</span>
        <span onClick={() => navigate("/faqs")}>FAQs</span>
        <span onClick={() => navigate("/contact")}>Contacto</span>
      </Box>
      <Box className="user-actions">
        <img src={SearchIcon} alt="Buscar" className="actionIcon" />
        <DarkModeToggle />
        <img src={CartIcon} alt="Carrito" className="actionIcon" />
        <IconButton color="inherit" onClick={handleUserIconClick}>
          <img src={UserIcon} alt="Usuario" className="actionIcon" />
        </IconButton>
        {isMobile && (
          <IconButton className="menu-button" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
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
            }}
          >
            Crear cuenta
          </MenuItem>
        </Menu>
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem
            button
            onClick={() => {
              navigate("/store");
              toggleDrawer(false)();
            }}
          >
            <ListItemText primary="Tienda" className="drawer-menu-item" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate("/categories");
              toggleDrawer(false)();
            }}
          >
            <ListItemText primary="Categorías" className="drawer-menu-item"/>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate("/faqs");
              toggleDrawer(false)();
            }}
          >
            <ListItemText primary="FAQs" className="drawer-menu-item" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              navigate("/contact");
              toggleDrawer(false)();
            }}
          >
            <ListItemText primary="Contacto" className="drawer-menu-item" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
export default HeaderLayout;
