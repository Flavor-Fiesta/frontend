import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthContext/AuthContext';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Avatar
} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./icons/logo.svg";
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";
import SearchIcon from "./icons/SearchIcon.svg";
import CartIcon from "./icons/CartIcon.svg";
import './HeaderStyle.css';

const HeaderLayout = () => {
  const { usuario, logout } = useContext(AuthContext);
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
    navigate("/login");
  };

  const handleSignUp = () => {
    handleClose();
    navigate('/register');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
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

      <Box component="nav" className={`navLink ${isMobile ? 'hidden' : ''}`}>
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
          {usuario ? (
            <Avatar style={{ backgroundColor: '#CC2D4A', color: '#ffffff' }} >{usuario.nombre.charAt(0).toUpperCase()}</Avatar>
          ) : (
            <FontAwesomeIcon style={{color: '#CC2D4A' }} icon={faUser} />
          )}
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
          {usuario ? (
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                color: "#CC2D4A",
                "&:hover": {
                  color: "#8FA206"
                },
                "&:active": {
                  color: "white",
                  backgroundColor: "#8FA206"
                },
              }}
            >
              Cerrar sesión
            </MenuItem>
          ) : (
            <>
              <MenuItem
                onClick={handleLogin}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  color: "#CC2D4A",
                  "&:hover": {
                    color: "#8FA206"
                  },
                  "&:active": {
                    color: "white",
                    backgroundColor: "#8FA206"
                  },
                }}
              >
                Iniciar sesión
              </MenuItem>
              <MenuItem
                onClick={handleSignUp}
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  color: "#CC2D4A",
                  "&:hover": {
                    color: "#8FA206"
                  },
                  "&:active": {
                    color: "white",
                    backgroundColor: "#8FA206"
                  },
                }}
              >
                Crear cuenta
              </MenuItem>
            </>
          )}
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
            <ListItemText primary="Categorías" className="drawer-menu-item" />
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
