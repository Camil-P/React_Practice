import GitHub from "./GitHubPage/GitHub";
import News from "./NewsPage/News";
import Header from "./Header";
import ToDo from "./ToDo/ToDo";
import Route from "./Route";

const App = () => {
  // const loadGithub = () => {
  //   if (window.location.pathname === "/github") {
  //     return <GitHub />;
  //   }
  // };

  // const loadNews = () => {
  //   if (window.location.pathname === "/news") {
  //     return <News />;
  //   }
  // };

  // const loadTodo = () => {
  //   if (window.location.pathname === "/") {
  //     return <ToDo />;
  //   }
  // };

  // const renderComponent = (component, pathname) => {
  //   if (window.location.pathname === pathname) {
  //     return component;
  //   }
  // };

  return (
    <div>
      <Header />
      <Route pathname="/">
        <ToDo />
      </Route>
      <Route pathname="/github">
        <GitHub />
      </Route>
      <Route pathname="/news">
        <News />
      </Route>
      <Route pathname="/nekistring">Neki String</Route>
      {/* {renderComponent(<ToDo />, "/")}
      {renderComponent(<GitHub />, "/github")}
      {renderComponent(<News />, "/news")} */}
    </div>
  );
};

export default App;
