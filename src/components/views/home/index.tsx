import { useEffect } from "react";
import Title from "components/common/title";
import axios from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "redux/slices/movieListSlice";
import { RootState } from "redux/store";
import { HomeContainer } from "./homeContainer";

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList);
  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await axios.get("/", {
          params: {
            s: "movie",
            page: 1,
            apikey: process.env.REACT_APP_API_KEY,
          },
        });

        const movieList = response.data.Search;
        dispatch(setMovieList(movieList));
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };
    fetchMovieList();
  }, [dispatch]);
  console.log("here data", movieList.data);

  return (
    <HomeContainer>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </HomeContainer>
  );
};

export default Home;
