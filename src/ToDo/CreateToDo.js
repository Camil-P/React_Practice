import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import AppContext from "../Contexts/AppContext";

const CreateToDo = ({ handleAdd }) => {
  const { appState } = useContext(AppContext);

  const [toDoObj, setToDoObj] = useState({
    name: "",
    description: "",
    ["date"]: "",
  });

  const handleOnChange = (value, inputType) => {
    setToDoObj({ ...toDoObj, [inputType]: value });
  };

  const isEnglishSelected = () => appState.language === "English";

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={6}>
        <Typography variant="h4" component="h2">
          {isEnglishSelected() ? "Create ToDo Item" : "Schaffen ToDo Aufgabe"}
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
          label={isEnglishSelected() ? "Description" : "Bezeichnung"}
          variant="standard"
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={toDoObj.date}
          onChange={(event) => handleOnChange(event.target.value, "date")}
          id="standard-basic"
          label={isEnglishSelected() ? "Date" : "Datum"}
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
          {isEnglishSelected() ? "Add Task" : "Aufgabe Hinzufügen"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateToDo;
