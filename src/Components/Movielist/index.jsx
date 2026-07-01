import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./style.css";
import MovieContext from "../context/MovieContext";

const Movielist = () => {
    const { page } = useContext(MovieContext);
    const [movielist, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    /*const fetchMovies = () => {
        setLoading(true);
        let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
        const options = {

            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU5YjM4ZTBkZDBjMTBlNjFiYzA4YjU0MmNmMGQ1MyIsIm5iZiI6MTc2NDQ3NzMzMi4yNTcsInN1YiI6IjY5MmJjOTk0NjIzNjMwMWFlMjI0N2UyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ia6PoA-zSjmLKIH1RJcVwYvvtBLSkub_S_eUltIPW0",
            },
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((res) => {
                setMovieList(res.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error("error: " + err);
                setLoading(false);
            });
    };*/
    const fetchMovies = () => {
        setLoading(true);

        let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${encodeURIComponent(search)}`;
        }

        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODU5YjM4ZTBkZDBjMTBlNjFiYzA4YjU0MmNmMGQ1MyIsIm5iZiI6MTc2NDQ3NzMzMi4yNTcsInN1YiI6IjY5MmJjOTk0NjIzNjMwMWFlMjI0N2UyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ia6PoA-zSjmLKIH1RJcVwYvvtBLSkub_S_eUltIPW0",
            },
        };

        fetch(url, options)
            .then((res) => {
                console.log("Status:", res.status);
                return res.json();
            })
            .then((data) => {
                console.log(data);

                if (data.results) {
                    setMovieList(data.results);
                } else {
                    setMovieList([]);
                }

                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };
    /*useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${search}`
        }

        fetchMovies();
    }, [page]);*/

    useEffect(() => {
        fetchMovies();
    }, [page, search]);


    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>

            <div className="Movielist">
                {movielist.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movieTitle={movie.title}
                        movieReleaseDate={movie.release_date}
                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Movielist;
