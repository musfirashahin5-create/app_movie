import "./style.css";

const MovieCard = ({ posterUrl, movieTitle, movieReleaseDate }) => {
  return (
    <div className="container">
      <img src={posterUrl} alt="Movie poster" />
      <h3>{movieTitle}</h3>
      <p>{movieReleaseDate}</p>
    </div>
  );
};

export default MovieCard;
