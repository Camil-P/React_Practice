import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import Cookies from 'universal-cookie';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { userState, dispatchUserState } = useContext(UserContext);

  const submitLogin = () => {
    const { email, password } = loginData;
    const loginBody = { email, password };

    axios
      .post("http://localhost:8000/api/sessions", loginBody)
      .then(({ data }) =>
      {
        window.history.pushState(null, "", "http://localhost:3000/github");
        dispatchUserState({
          type: "setTokens",
          value: {
            accessToken: data.accesToken,
            refreshToken: data.refreshToken,
          },
        });
        // const cookies = new Cookies();
        // cookies.set('accessToken', userState.accessToken);
        // cookies.set('refreshToken', userState.refreshToken);
        document.cookie = `accessToken=${data.accesToken};max-age=180`;
        document.cookie = `refreshToken=${data.refreshToken};max-age=360`;
        console.log(data.accesToken, data.refreshToken);
      }
      )
      .catch((e) => console.log(e));
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid sx={{ mt: "20px" }}>
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => {
            setLoginData({ ...loginData, email: e.target.value });
          }}
          defaultValue={loginData.email}
        />
      </Grid>
      <Grid sx={{ mt: "20px" }}>
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
          defaultValue={loginData.password}
        />
      </Grid>
      <Grid sx={{ mt: "20px" }}>
        <Button onClick={submitLogin}>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default Login;
