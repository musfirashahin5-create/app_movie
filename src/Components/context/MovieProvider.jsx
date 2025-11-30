import { useState } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <MovieContext.Provider value={{ page, setPage }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
