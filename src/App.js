import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const options = {
    method: "GET",
    url: "https://numbersapi.p.rapidapi.com/7/24/date",
    params: { fragment: "true", json: "true" },
    headers: {
      "X-RapidAPI-Key": "ac602fb9a7msh43d1a036da9742cp143ba0jsn02c2f5ba4c39",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  const [dateData, setDateData] = useState({});
  const [inputedDate, setInputedDate] = useState("");

  const fetchNumberData = async () => {
    // axios.request(options).then(() => setDateData(res)).catch((err) => console.log(err));
    const res = await axios.request(options).catch((err) => console.log(err));

    setDateData(res);
    console.log(res);
  };

  useEffect(() => {
    fetchNumberData();
  }, [dateData]);

  const search = () => {
    options.url = `https://numbersapi.p.rapidapi.com/${inputedDate}/date`;
    fetchNumberData();
  };

  return (
    <div>
      <input onChange={(input) => setInputedDate(input.target.value)} />
      <button onClick={search}>Search</button>
      <h1>{dateData.data?.text}</h1>
    </div>
  );
};

export default App;
