import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { InputBase } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useNavigate } from "react-router-dom";

const Nav = ({ setQuery, setUser }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  let navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.search.value.length <= 2) return window.alert("La busqueda tiene que tener al menos 3 caracteres");
    setQuery(e.target.search.value);
    navigate("/search");
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("tokenAlkemy");
    setUser(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg" sx={{ padding: ".5rem 0" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 .5rem",
          }}
        >
          <IconButton sx={{ color: "white" }} onClick={() => navigate("/home")}>
            <RestaurantIcon />
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "block" }, marginLeft: 1 }}
            >
              Mi menú
            </Typography>
          </IconButton>
          <Box
            component="form"
            sx={{ backgroundColor: "white", borderRadius: 2, width: "auto" }}
            onSubmit={handleSearch}
          >
            <InputBase
              sx={{ ml: 1 }}
              placeholder="Search..."
              inputProps={{ "aria-label": "Search..." }}
              name="search"
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://www.alkemy.org/logo512.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Button onClick={handleLogout}>Logout</Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
