import Header from "./Header";
import { TextField, Grid, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";

const url = "https://api.github.com/users/";

const App = () => {
  const inputRef = useRef();
  const [searchedUser, setSearchedUser] = useState({
    name: "",
    bio: "",
    avatar_url: "",
  });

  const fetchUser = (user = "dzemildupljak") => {
    axios
      .get(url + user)
      .then((res) => {
        setSearchedUser(res.data);
        console.log(res.data);
      })
      .catch((m) => console.log);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const changeUser = () => {
    fetchUser(inputRef.current.value);
  };

  return (
    <div>
      <Header />
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item xs={2}>
          <TextField
            inputRef={inputRef}
            placeholder="search..."
            id="standard-basic"
            label="Search"
            variant="standard"
          />
        </Grid>
        <Grid item xs={3}>
          <Button onClick={changeUser} variant="contained">
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DisplayCard data={searchedUser} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
