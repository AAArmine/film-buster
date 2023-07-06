import { FC } from "react";
import { Movie } from "redux/slices/movieListSlice";
import { useNavigate } from "react-router-dom";
import MovieInfo from "./movieInfo";
import { MoviePoster } from "./moviePoster";

type MovieItemPropsType = {
  movieItem: Movie;
};
const MovieItem: FC<MovieItemPropsType> = ({ movieItem }) => {
  const navigate = useNavigate();
  return (
    <>
      <MoviePoster
        key={movieItem.imdbID}
        style={{ backgroundImage: `url(${movieItem.Poster})` }}
        onClick={() =>
          navigate("/movie", { state: { movieId: movieItem.imdbID } })
        }
      >
        {movieItem.Poster === "N/A" && (
          <span className="noImage">No Image</span>
        )}
        <div className="viewCont">
          <span onClick={() => navigate("/")}>View</span>
        </div>
        <MovieInfo movieItem={movieItem} />
      </MoviePoster>
    </>
  );
};

export default MovieItem;
