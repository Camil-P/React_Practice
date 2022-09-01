import {
  Card,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardContent,
} from "@mui/material";

const newsCardDetail = ({ location }) => {
  const { state } = location;
  const { title, description, urlToImage } = state;
  return (
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
  );
};

export default newsCardDetail;
