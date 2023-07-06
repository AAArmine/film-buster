import { MovieDataContainer } from "./movieDataCont";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "services/api";
import { Block } from "components/common/block";
import Title from "components/common/title";
import { movieFun } from "constants/content";
import { MovieDetails } from "types/general";
import DataItem from "./dataItem";
import { SecondaryTitle } from "components/common/title/secondaryTitle";
import AdditionalData from "./additionalData";

type LocationState = {
  movieId: string;
};
const MovieData = () => {
  const location = useLocation();
  const id = (location.state as LocationState)?.movieId;
  const [movie, setMovie] = useState<MovieDetails>();

  const fetchMovieById = async (movieId: string) => {
    try {
      const response = await axios.get("/", {
        params: {
          i: movieId,
          apikey: process.env.REACT_APP_API_KEY,
        },
      });
      const movieData = response.data;
      setMovie(movieData);
    } catch (error) {
      console.error("Error fetching movie information:", error);
    }
  };

  useEffect(() => {
    fetchMovieById(id);
  }, []);

  return (
    <Block>
      <MovieDataContainer>
        <SecondaryTitle>{movieFun}</SecondaryTitle>
        <div className="content">
          <div
            className="poster"
            style={{ backgroundImage: `url(${movie?.Poster})` }}
          />
          <div className="details">
            <Title text={movie?.Title || ""} />
            <DataItem name="Genre" value={movie?.Genre} />
            <DataItem name="Awards" value={movie?.Awards} />
            <DataItem name="Country" value={movie?.Country} />
            <DataItem name="Year" value={movie?.Year} />
          </div>
          <AdditionalData
            actors={movie?.Actors}
            plot={movie?.Plot}
            imdbRating={movie?.imdbRating}
          />
        </div>
      </MovieDataContainer>
    </Block>
  );
};

export default MovieData;
