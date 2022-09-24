import { useContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "./Contexts/AppContext";
import { UserContext } from "./Contexts/UserContext";
import ErrorPage from "./Components/Extensions/ErrorPage";
import GitHub from "./Components/GitHubPage/GitHub";
import Header from "./Components/Extensions/Header";
import Login from "./Components/Login/Login";
import NewsCardDetail from "./Components/NewsCardDetail/NewsCardDetail";
import News from "./Components/NewsPage/News";
import appSettingsReducer from "./Reducer/appSettingsReducer";
import ToDo from "./Components/ToDo/ToDo";
import VezbajUseReducer from "./Components/VezbaZaReducer/VezbaUseReducer";
import { getCookie } from "./utils";

export default function App() {
  const { isUserLogged, dispatchUserState } = useContext(UserContext);
  console.log("Cookie: " + document.cookie);

  useEffect(() => {
    const accessTokenFromCookie = getCookie("accessToken");

    const refreshTokenFromCookie = getCookie("refreshToken");

    console.log(accessTokenFromCookie, refreshTokenFromCookie);
    
    dispatchUserState({
      type: "setTokens",
      value: {
        accessToken: accessTokenFromCookie,
        refreshToken: refreshTokenFromCookie,
      },
    });
  }, []);

  const [appState, dispatchAppState] = useReducer(appSettingsReducer, {
    language: "English",
    theme: "white",
  });

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{ appState, dispatch: dispatchAppState }}>
          <Header />
          <Switch>
            <Route path="/login" component={isUserLogged() ? GitHub : Login} />
            <Route path="/github" component={isUserLogged() ? GitHub : Login} />
            <Route path="/news" component={News} />
            <Route path="/" exact render={(props) => <ToDo {...props} />} />
            {/* <Route path="/" exact component={ToDo} /> */}
            <Route
              path="/news-card"
              render={(props) => <NewsCardDetail {...props} />}
            />
            <Route path="/useReducerVezba" component={VezbajUseReducer} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}
