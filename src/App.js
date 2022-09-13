import { useReducer, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "./Contexts/AppContext";
import GitHub from "./GitHubPage/GitHub";
import Header from "./Header";
import NewsCardDetail from "./NewsCardDetail/NewsCardDetail";
import News from "./NewsPage/News";
import appSettingsReducer from "./Reducer/appSettingsReducer";
import ToDo from "./ToDo/ToDo";

export default function App() {
  const [appState, dispatch] = useReducer(appSettingsReducer, {
    language: "English",
    theme: "white",
  });

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{ appState, dispatch }}>
          <Header />
          <Switch>
            <Route path="/github" component={GitHub} />
            <Route path="/news" component={News} />
            <Route path="/" exact render={(props) => <ToDo {...props} />} />
            {/* <Route path="/" exact component={ToDo} /> */}
            <Route
              path="/news-card"
              render={(props) => <NewsCardDetail {...props} />}
            />
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}
