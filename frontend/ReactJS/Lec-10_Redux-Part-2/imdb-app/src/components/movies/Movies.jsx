import { useState, useEffect } from "react";

import useMovies from "../../hooks/useMovies";
import {
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Pagination,
} from "@mui/material";

const Movies = () => {
  const { results, page, totalPages, handleChange } = useMovies();
  console.log(results);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavMovies = JSON.parse(localStorage.getItem("favoritesMovies"));
    setFavorites(savedFavMovies);
  }, []);

  const addHandleClick = (movie) => {
    console.log(movie);
    const updatedFavMovies = [...favorites, movie];

    setFavorites(updatedFavMovies);
    localStorage.setItem("favoritesMovies", JSON.stringify(updatedFavMovies));
  };

  return (
    <>
      <Grid2 container spacing={2} className="flex justify-center">
        {results &&
          !!results.length &&
          results.map((movie) => {
            return (
              <div key={movie.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // https://developer.themoviedb.org/docs/image-basics - for images
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {movie.overview}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        addHandleClick(movie);
                      }}
                    >
                      Add to Fav
                    </Button>
                    <Button size="small">Add to watchlist</Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        <Pagination
          count={totalPages}
          color="primary"
          page={page}
          onChange={(event, value) => {
            handleChange(value);
          }}
        />
      </Grid2>
    </>
  );
};

export default Movies;
