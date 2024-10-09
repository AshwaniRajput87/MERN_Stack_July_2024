import { useState, useEffect } from "react";
import { movieInstance } from "../api/apiAuthetication.js";

const useMovies = () => {
  //
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const results = await movieInstance.get(`/discover/movie?page=${page}`); //https://api.themoviedb.org/3/discover/movie?page=1

      setResults(results.data.results);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    results,
    error,
    isLoading,
    page,
  };
};

export default useMovies;
