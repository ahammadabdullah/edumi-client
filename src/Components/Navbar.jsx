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
import { Container } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import bookLogo from "../assets/book_logo.png";

const drawerWidth = 240;
const navItems = ["Home", "All Classes", "Teach on Edumi"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

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
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={bookLogo} alt="" style={{ height: "40px" }} />
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
