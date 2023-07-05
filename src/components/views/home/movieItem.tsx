import { FC } from "react";
import { Movie } from "redux/slices/movieListSlice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { large, medium, small } from "constants/breakpoints";
import { alternative, main } from "constants/colors";
import MovieInfo from "./movieInfo";

export const MoviePoster = styled.li`
  width: 17%;
  height: 250px;
  background-color: ${alternative};
  background-position: center;
  background-size: cover;
  margin-bottom: 100px;
  position: relative;
  cursor: pointer;
  &:hover div {
    visibility: visible;
  }
  .viewCont {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(31, 20, 128, 0.226);
    visibility: hidden;
    transition: visibility 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      border-radius: 15px;
      background-color: ${main};
      width: 80px;
      font-size: 14px;
      letter-spacing: 2px;
      box-shadow: 2px 2px 9px black;
    }
  }
  @media (max-width: ${large}) {
    height: 180px;
  }
  @media (max-width: ${medium}) {
    width: 45%;
    height: 300px;
  }
  @media (max-width: ${small}) {
    width: 47%;
    height: 200px;
  }
`;

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
        onClick={() => navigate("/")}
      >
        <div className="viewCont">
          <span onClick={() => navigate("/")}>View</span>
        </div>
        <MovieInfo movieItem={movieItem} />
      </MoviePoster>
    </>
  );
};

export default MovieItem;
