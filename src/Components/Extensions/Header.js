import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CustomLink from "../../Core/RouterComponents/Link";
import { Link, useHistory } from "react-router-dom";
import FlagButton from "../../Core/FlagButton";
import { Grid, Switch } from "@mui/material";
import AppContext from "../../Contexts/AppContext";
import { UserContext } from "../../Contexts/UserContext";
import { clearCookie } from "../../utils";

const Header = () => {
  const { isUserLogged, dispatchUserState } = React.useContext(UserContext);
  const { dispatch, appState } = React.useContext(AppContext);
  const history = useHistory();

  const logout = () => {
    clearCookie("accessToken");
    clearCookie("refreshToken");
    dispatchUserState({ type: "clearTokens" });
    history.pushState(null, "", "/");
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
          {!isUserLogged() && (
            <Button color="inherit">
              <Link style={{ color: "white" }} to="/login">
                Login
              </Link>
              {/* <CustomLink href="/news">News</CustomLink> */}
            </Button>
          )}
          {!isUserLogged() && (
            <Button color="inherit">
              <Link style={{ color: "white" }} to="/register">
                Register
              </Link>
              {/* <CustomLink href="/news">News</CustomLink> */}
            </Button>
          )}
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/">
              ToDo
            </Link>
            {/* <CustomLink href="/news">News</CustomLink> */}
          </Button>
          {isUserLogged() && (
            <Button color="inherit">
              <Link style={{ color: "white" }} to="/github">
                Github
              </Link>
              {/* <CustomLink href="/github">Github</CustomLink> */}
            </Button>
          )}
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/news">
              News
            </Link>
            {/* <CustomLink href="/">ToDo</CustomLink> */}
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/useReducerVezba">
              Calculator
            </Link>
            {/* <CustomLink href="/">ToDo</CustomLink> */}
          </Button>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <FlagButton
                  handleOnClick={() => dispatch({ type: "setDeutsch" })}
                  imgUrl={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAB3CAMAAACAEaSBAAAAGFBMVEUAAAD/zgDdAABvAADoAADaAAD0rAD/0QBKKgvJAAAAgUlEQVR4nO3PwQ2DAAwAsVCg7L8xQ/A5RfYGngEAAAAAAACAD84d5tphfjt4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLTMvcP8d5hnhzl28GjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo2fJ4AcVtaoAIiNiLAAAAAElFTkSuQmCC"
                  }
                />
              </Grid>
              <Grid item>
                <FlagButton
                  handleOnClick={() => dispatch({ type: "setEnglish" })}
                  imgUrl={
                    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                  }
                />
              </Grid>
              <Grid>
                <Switch
                  checked={appState.theme === "white"}
                  onChange={(event) =>
                    dispatch({
                      type: event.target.checked
                        ? "setLightTheme"
                        : "setDarkTheme",
                    })
                  }
                />
              </Grid>
              {isUserLogged() && (
                <Button onClick={logout} color="inherit">
                  Logout
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
