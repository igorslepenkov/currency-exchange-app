import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import { ROUTE, RouteKey } from "../../router";
import { useNavigate } from "react-router-dom";
import { LinkWithoutStyles } from "../LinkWithoutStyles";

const drawerWidth = 240;

export const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const routeKeys = Object.keys(ROUTE) as unknown as RouteKey[];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {routeKeys.map((key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(ROUTE[key])}
            >
              <ListItemText
                primary={key}
                primaryTypographyProps={{ variant: "h5" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        component="header"
        position="static"
        sx={(theme) => ({ backgroundColor: theme.palette.background.paper })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Typography variant="h5">EXHANGE APP</Typography>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {routeKeys.map((key) => (
              <Button key={key} sx={{ color: "#fff" }}>
                <Typography variant="h6">
                  <LinkWithoutStyles to={ROUTE[key]}>{key}</LinkWithoutStyles>{" "}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
      </Box>
    </>
  );
};
