import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomLink from "./Link";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link style={{ color: "white" }} to="/">
              ToDo
            </Link>
            {/* <CustomLink href="/news">News</CustomLink> */}
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/github">
              Github
            </Link>
            {/* <CustomLink href="/github">Github</CustomLink> */}
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/news">
              News
            </Link>
            {/* <CustomLink href="/">ToDo</CustomLink> */}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
