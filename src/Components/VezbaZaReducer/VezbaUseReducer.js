import { Button, Grid, TextField, Typography } from "@mui/material";
import { useReducer, useRef } from "react";

export default function VezbajUseReducer() {
  const inputRef = useRef();

  const reducer = (state, { type, payload: { amount = 1 } }) => {
    if (type === "increment") {
      return {
        counter: state.counter + (!Boolean(amount) ? 1 : parseInt(amount)),
      };
    } else if (type === "decrement") {
      return {
        counter: state.counter - (!Boolean(amount) ? 1 : parseInt(amount)),
      };
    } else if (type === "reset") {
      return { counter: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <Grid container display="flex" direction="column">
      <TextField placeholder="Uniste br..." inputRef={inputRef} />
      <Grid item>
        <Button
          onClick={() => dispatch({ type: "reset", payload: { amount: 0 } })}
          variant="contained"
        >
          RESET
        </Button>
      </Grid>
      <Grid item>
        <Grid container display="flex">
          <Button
            onClick={() =>
              dispatch({
                type: "increment",
                payload: { amount: inputRef.current.value },
              })
            }
            variant="contained"
            href="#contained-buttons"
          >
            +
          </Button>
          <Typography variant="h1"> {state.counter} </Typography>
          <Button
            onClick={() =>
              dispatch({
                type: "decrement",
                payload: { amount: inputRef.current.value },
              })
            }
            variant="contained"
            href="#contained-buttons"
          >
            -
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
