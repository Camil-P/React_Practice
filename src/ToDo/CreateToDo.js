import { Button, Grid, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

const CreateToDo = ({ handleAdd }) => {
  const [toDoObj, setToDoObj] = useState({
    name: "",
    description: "",
    ["date"]: "",
  });

  const handleOnChange = (value, inputType) => {
    setToDoObj({ ...toDoObj, [inputType]: value });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Typography variant="h4" component="h2">
          Create ToDo Item
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={toDoObj.name}
          onChange={(event) => handleOnChange(event.target.value, "name")}
          id="standard-basic"
          label="Name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={toDoObj.description}
          onChange={(event) =>
            handleOnChange(event.target.value, "description")
          }
          id="standard-basic"
          label="Description"
          variant="standard"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={toDoObj.date}
          onChange={(event) => handleOnChange(event.target.value, "date")}
          id="standard-basic"
          label="Date"
          variant="standard"
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => {
            handleAdd(toDoObj);
            setToDoObj({ name: "", description: "", date: "" });
          }}
          variant="filled"
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateToDo;
