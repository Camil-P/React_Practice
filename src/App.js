import { useEffect } from "react";
import GitHub from "./GitHubPage/GitHub";
import News from "./NewsPage/News";
import Header from "./Header";
import ToDo from "./ToDo/ToDo";

const App = () => {
  return (
    <div>
      <Header />
      {/* <GitHub /> */}
      {/* <News /> */}
      <ToDo />
    </div>
  );
};

export default App;
