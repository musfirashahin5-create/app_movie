import { useContext } from "react";
import "./style.css";
import MovieContext from "../context/MovieContext";

const Pagination = () => {
  const { page, setPage } = useContext(MovieContext);

  return (
    <div className="btncontainer">
      <button
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        Prev
      </button>

      <button onClick={() => setPage((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
