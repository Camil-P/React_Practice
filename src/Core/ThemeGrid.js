import { Grid } from "@mui/material";
import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

const ThemeGrid = ({
  children,
  direction = "column",
  justifyContent = "left",
  alignItems = "left",
  spacing = 0,
  rowSpacing = 0,
}) => {
  const { appState } = useContext(AppContext);

  return (
    <Grid
      container
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      spacing={spacing}
      rowSpacing={rowSpacing}
      sx={{
        backgroundColor: appState.theme,
        width: "100%",
        height: "100vh",
      }}
    >
      {children}
    </Grid>
  );
};

export default ThemeGrid;
