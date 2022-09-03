import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GitHub from "./GitHubPage/GitHub";
import Header from "./Header";
import NewsCardDetail from "./NewsCardDetail/NewsCardDetail";
import News from "./NewsPage/News";
import ToDo from "./ToDo/ToDo";

export default function App() {
  const [nekiState, setNekiState] = useState("Ovo smo poslali");

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/github" component={GitHub} />
          <Route path="/news" component={News} />
          <Route path="/" exact component={ToDo} />
          {/* <Route path="/" exact component={ToDo} /> */}
          <Route
            path="/news-card/:id"
            render={(props) => (
              <NewsCardDetail {...props} nekiState={nekiState} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
