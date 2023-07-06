import { useEffect, useState } from "react";
import Title from "components/common/title";
import axios from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "redux/slices/movieListSlice";
import { RootState } from "redux/store";
import { HomeContainer } from "./search/homeContainer";
import { Block } from "components/common/block";
import MovieItem from "./movieItem";
import { Description } from "components/common/description";
import { siteAnnounce } from "constants/content";
import { Movie } from "redux/slices/movieListSlice";
import Search from "./search";
import PaginationSec from "./pagination";

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList);
  const [searchMovie, setSearchMovie] = useState<Movie[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState<number>(1);

  const fetchMovieList = async () => {
    try {
      const response = await axios.get("/", {
        params: {
          s: "movie",
          page: page,
          apikey: process.env.REACT_APP_API_KEY,
        },
      });
      dispatch(setMovieList(response.data.Search));
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, [dispatch, page]);

  const movieItems = searchMovie.length ? searchMovie : movieList.data;
  return (
    <HomeContainer>
      <Block>
        <Title text=" most popular movies" />
        <Search
          setSearchMovie={setSearchMovie}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <Description>{siteAnnounce}</Description>
        <ul>
          {movieItems.map((movie) => (
            <MovieItem movieItem={movie} key={movie.imdbID} />
          ))}
        </ul>
        {!searchMovie.length && <PaginationSec setPage={setPage} />}
      </Block>
    </HomeContainer>
  );
};

export default Home;
