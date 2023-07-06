import { FC } from "react";
import { Movie } from "redux/slices/movieListSlice";
import styled from "styled-components";
import { secondary } from "constants/colors";

export const MoveInfoCont = styled.div`
  font-size: 12px;
  width: 100%;
  position: absolute;
  bottom: -100px;
  padding: 5px 0px;
  min-height: 100px;
  z-index: 0;
  .year {
    font-size: 12px;
    color: ${secondary};
    font-weight: 700;
    display: block;
  }

  .title {
    text-transform: uppercase;
    font-weight: 800;
    display: block;
  }
`;

type MovieInfoPropsType = {
  movieItem: Movie;
};
const MovieInfo: FC<MovieInfoPropsType> = ({ movieItem }) => {
  return (
    <MoveInfoCont key={movieItem.imdbID}>
      <div className="info">
        <span className="title">
          {movieItem.Title}{" "}
          <span className="year">Year / {movieItem.Year}</span>{" "}
        </span>
      </div>
    </MoveInfoCont>
  );
};

export default MovieInfo;
