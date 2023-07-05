import { useEffect, useState } from "react";
import Title from "components/common/title";
import axios from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { setMovieList } from "redux/slices/movieListSlice";
import { RootState } from "redux/store";
import { HomeContainer } from "./homeContainer";
import { Block } from "components/common/block";
import MovieItem from "./movieItem";
import { Description } from "components/common/description";
import { SearchInput } from "./searchInput";
import { siteAnnounce } from "constants/content";
import { BiSearch } from "react-icons/bi";
import { SearchBtn } from "./searchBtn";
import { SearchCont } from "./searchCont";
import { Pagination } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movieList);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await axios.get("/", {
          params: {
            s: "movie",
            page: page,
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
  }, [dispatch, page]);
  console.log("here data", movieList.data);

  return (
    <HomeContainer>
      <Block>
        <Title text=" most popular movies" />
        <SearchCont>
          <SearchInput placeholder="Search movie by the title..." />
          <SearchBtn>
            <BiSearch />
          </SearchBtn>
        </SearchCont>
        <Description>{siteAnnounce}</Description>
        <ul>
          {movieList.data.map((movie) => (
            <MovieItem movieItem={movie} />
          ))}
        </ul>
        <Pagination
          total={100} // Total number of pages
          defaultCurrent={1} // Default active page
          pageSize={10} // Number of items per page
          className="custom-pagination"
          showSizeChanger={false} // Hide the page size changer component
          onChange={(page, pageSize) => {
            setPage(page);
            console.log("Page changed:", page, pageSize);
          }}
        />
      </Block>
    </HomeContainer>
  );
};

export default Home;
