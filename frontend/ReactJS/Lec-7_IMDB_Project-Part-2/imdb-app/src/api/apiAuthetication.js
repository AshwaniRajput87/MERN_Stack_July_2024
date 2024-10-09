import axios from "axios";

const THE_MOVIES_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDBjNjI4ZTI0YmQxMWM4YWU5ZDQ2MjQ4ODQ4Njg2MCIsIm5iZiI6MTcyODQ0MTE4My44OTcyNDksInN1YiI6IjY3MDJiMjQ0OTI1ZmRmOTI1YjdkNDkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c4hfkgu2uZQoeIWqVPQH013goqw8GaZM-DduQctUqus";

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${THE_MOVIES_API_TOKEN}`,
  },
  responseType: "json",
});
