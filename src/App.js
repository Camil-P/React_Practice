import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LanguageContext from "./Contexts/LanguageContext";
import GitHub from "./GitHubPage/GitHub";
import Header from "./Header";
import NewsCardDetail from "./NewsCardDetail/NewsCardDetail";
import News from "./NewsPage/News";
import ToDo from "./ToDo/ToDo";

export default function App() {
  const [language, setLanguage] = useState("English");

  const changeLanguage = (language) => setLanguage(language);

  return (
    <div>
      <BrowserRouter>
        <Header changeLanguage={changeLanguage} />
        <Switch>
          <Route path="/github" component={GitHub} />
          <Route path="/news" component={News} />
          <Route
            path="/"
            exact
            render={(props) => (
              <LanguageContext.Provider value={language}>
                <ToDo {...props} language={language} />
              </LanguageContext.Provider>
            )}
          />
          {/* <Route path="/" exact component={ToDo} /> */}
          <Route
            path="/news-card/:id"
            render={(props) => <NewsCardDetail {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
