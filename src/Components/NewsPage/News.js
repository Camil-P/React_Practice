import * as React from "react";
import { NEWS_KEY } from "../../constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import ThemeGrid from "../../Core/ThemeGrid";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=bitcoin&from=2022-08-25&sortBy=popularity&apiKey=${NEWS_KEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((m) => console.log);
  }, []);

  return (
    <ThemeGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ marginTop: "40px" }}
    >
      {news.map((n, i) => (
        <Grid xs="auto">
          <NewsCard data={n} />
        </Grid>
      ))}
    </ThemeGrid>
  );
}
