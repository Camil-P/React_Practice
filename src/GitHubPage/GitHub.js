import { TextField, Grid, Button } from "@mui/material";
import DisplayCard from "./DisplayCard";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const url = "https://api.github.com/users/";

const GitHub = () => {
  const inputRef = useRef();
  const [searchedUser, setSearchedUser] = useState(null);

  const fetchUser = (user = "Camil-P") => {
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
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item xs="auto">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs="auto">
            <TextField
              inputRef={inputRef}
              placeholder="Search by username..."
              id="standard-basic"
              label="Search by username"
              variant="standard"
            />
          </Grid>
          <Grid item xs="auto">
            <Button onClick={changeUser} variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <DisplayCard data={searchedUser} />
      </Grid>
    </Grid>
  );
};

export default GitHub;
