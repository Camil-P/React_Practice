import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";
import { useContext } from "react";
import AppContext from "../../Contexts/AppContext";
import ThemeGrid from "../../Core/ThemeGrid";

const NewsCardDetail = ({ nekiState, location }) => {
  const { state } = location;
  const { title, description, urlToImage } = state;
  return (
    <ThemeGrid>
      <Card sx={{ width: 450 }}>
        <CardMedia
          component="img"
          height="240"
          image={urlToImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </ThemeGrid>
  );
};

export default NewsCardDetail;
