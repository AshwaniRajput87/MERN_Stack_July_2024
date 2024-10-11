import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(query);
    console.log("form handled");
    /*
      Do as an assigment
       1. implement useSearch() custom hook

          - hit this end point 

             1.API_KEY = 540c628e24bd11c8ae9d462488486860
             
             2. create this dynamic search end point - `https://api.themoviedb.org/3/search/movie?query=${query}&${ API_KEY}`

             3. create SearchMovie()

                 - use Axios to get the above endpoints
                 - get the results

            4. Send the results you got after search to Movies components via props
    
    
    */
  };
  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button type="submit" onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </>
  );
};

export default Search;
