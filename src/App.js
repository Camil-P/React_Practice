import { useContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "./Contexts/AppContext";
import UserContextProvider, { UserContext } from "./Contexts/UserContext";
import ErrorPage from "./ErrorPage";
import GitHub from "./GitHubPage/GitHub";
import Header from "./Header";
import Login from "./Login/Login";
import NewsCardDetail from "./NewsCardDetail/NewsCardDetail";
import News from "./NewsPage/News";
import appSettingsReducer from "./Reducer/appSettingsReducer";
import ToDo from "./ToDo/ToDo";

export default function App() {
  const { isUserLogged, dispatchUserState } = useContext(UserContext);
  console.log("Cookie: " + document.cookie);

  useEffect(() => {
    const accessTokenFromCookie = document.cookie
      .split(";")
      .find((row) => row.includes("accessToken="))
      ?.split("=")[1];

    const refreshTokenFromCookie = document.cookie
      .split(";")
      .find((row) => row.includes("refreshToken="))
      ?.split("=")[1];

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
            <Route path="*" component={ErrorPage} />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}
