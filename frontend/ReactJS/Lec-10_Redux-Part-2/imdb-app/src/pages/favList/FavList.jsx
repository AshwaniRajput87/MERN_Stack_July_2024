import {
  Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  // Pagination,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const FavList = () => {
  const [favorites, setFavroties] = useState([]);

  useEffect(() => {
    const savedFavMovies = JSON.parse(localStorage.getItem("favoritesMovies"));
    setFavroties(savedFavMovies);
  }, []);

  const removeHandleClick = (movie) => {
    console.log(movie);
    // Do in home work to remove the movie card when you click on remove to fav.
  };

  return (
    <>
      <Grid2 container spacing={2} className="flex justify-center">
        {favorites &&
          !!favorites.length &&
          favorites.map((movie) => {
            return (
              <div key={`movie-id-${movie.id}`}>
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
                        removeHandleClick(movie);
                      }}
                    >
                      Remove to Fav
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        {/* <Pagination
          count={totalPages}
          color="primary"
          page={page}
          onChange={(event, value) => {
            handleChange(value);
          }}
        /> */}
      </Grid2>
    </>
  );
};

export default FavList;
