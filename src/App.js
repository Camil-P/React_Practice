import { BrowserRouter, Route, Switch } from "react-router-dom";
import GitHub from "./GitHubPage/GitHub";
import Header from "./Header";
import newsCardDetail from "./NewsCardDetail/NewsCardDetail";
import News from "./NewsPage/News";
import ToDo from "./ToDo/ToDo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/github" component={GitHub} />
          <Route path="/news" component={News} />
        </Switch>
        <Route path="/" exact component={ToDo} />
        <Route path="/" exact component={ToDo} />
        <Route path="/news-card/:id" component={newsCardDetail} />
      </BrowserRouter>
    </div>
  );
}
