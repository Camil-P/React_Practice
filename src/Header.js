import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const handleOnClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);

    const navigationEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navigationEvent);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SatroLogo
          </Typography>
          <Button color="inherit">
            <a onClick={handleOnClick} href="/news">
              News
            </a>
          </Button>
          <Button color="inherit">
            <a onClick={handleOnClick} href="/github">
              Github
            </a>
          </Button>
          <Button color="inherit">
            <a onClick={handleOnClick} href="/">
              Todo
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
