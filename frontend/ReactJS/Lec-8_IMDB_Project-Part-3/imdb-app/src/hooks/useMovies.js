import { useState, useEffect } from "react";
import { movieInstance } from "../api/apiAuthetication.js";

const useMovies = () => {
  //
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleChange = (newPage) => {
    setPage(newPage);
    console.log(page);
  };

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const results = await movieInstance.get(`/discover/movie?page=${page}`); //https://api.themoviedb.org/3/discover/movie?page=1
      console.log(results);
      setResults(results.data.results);
      setTotalPages(results.data.total_pages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  return {
    results,
    error,
    isLoading,
    page,
    totalPages,
    handleChange,
  };
};

export default useMovies;
