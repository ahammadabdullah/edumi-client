import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Container, Menu, MenuItem, Tooltip } from "@mui/material";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import bookLogo from "../assets/book_logo.png";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const drawerWidth = 240;
const navItems = ["Home", "All Classes", "Teach on Edumi"];

function Navbar(props) {
  const { user, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err));
  };
  const isItemActive = (item) => {
    // Check if the current route matches the item's path
    return location.pathname
      .toLowerCase()
      .includes(item.replace(/ /g, "").toLowerCase());
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#1976d2", height: "100vh" }}
    >
      <Typography
        variant="h6"
        sx={{ my: 2, display: "flex", alignItems: "center", gap: "5px" }}
      >
        <img src={bookLogo} alt="" style={{ height: "40px" }} />
        <Typography color={"white"}>Edumi</Typography>
      </Typography>
      <Divider />
      <List sx={{ color: "#fff" }}>
        {navItems.map((item) => (
          <NavLink
            key={item}
            to={`/${item.replace(/ /g, "").toLowerCase()}`}
            style={{
              color: isItemActive(item) ? "#facc15" : "#fff",
              textDecoration: isItemActive(item) ? "underline" : "none",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton
              // color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "#facc15", mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              alignItems={"center"}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            >
              <img src={bookLogo} alt="" style={{ height: "40px" }} />
              <Typography variant="h5" paddingLeft={2}>
                Edumi
              </Typography>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.replace(/ /g, "").toLowerCase()}`}
                >
                  <Button
                    style={{
                      color: isItemActive(item) ? "#facc15" : "#fff",
                      textDecoration: isItemActive(item) ? "underline" : "none",
                    }}
                  >
                    {item}
                  </Button>
                </NavLink>
              ))}
            </Box>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user.photoURL ? (
                      <img
                        className="w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  className="h-full"
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
                  <Box padding={1}>
                    <Typography className="py-2">{user.displayName}</Typography>
                    <NavLink to={"/dashboard"}>
                      <Typography className="py-2" variant="subtitle1">
                        Dashboard
                      </Typography>
                    </NavLink>
                    <Button onClick={handleLogout} variant="outlined">
                      Logout
                    </Button>
                  </Box>

                  {/* settings.map((item) => (
                    <NavLink
                      key={item}
                      to={`/${item.replace(/ /g, "").toLowerCase()}`}
                    >
                      <Button
                        style={{
                          color: isItemActive(item) ? "#fff" : "#facc15",
                          textDecoration: isItemActive(item)
                            ? "underline"
                            : "none",
                        }}
                      >
                        {item}
                      </Button>
                    </NavLink> */}
                </Menu>
              </Box>
            ) : (
              <Button
                color="inherit"
                sx={{ ml: "120px", border: "1px solid #facc15", px: "25px" }}
              >
                <Link
                  to={"/login"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Login
                </Link>
              </Button>
            )}
          </Container>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
