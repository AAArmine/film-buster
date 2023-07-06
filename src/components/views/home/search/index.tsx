import { Dispatch, SetStateAction, FC, ChangeEvent } from "react";
import { SearchBtn } from "./searchBtn";
import { SearchCont } from "./searchCont";
import { SearchInput } from "./searchInput";
import { BiSearch } from "react-icons/bi";
import { Movie } from "redux/slices/movieListSlice";
import axios from "services/api";
import { ToastContainer, toast } from "react-toastify";

type SearchPropsType = {
  setSearchMovie: Dispatch<SetStateAction<Movie[]>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
};
const Search: FC<SearchPropsType> = ({
  setSearchMovie,
  searchInput,
  setSearchInput,
}) => {
  const fetchSearchMovie = async () => {
    try {
      const response = await axios.get("/", {
        params: {
          s: searchInput,
          apikey: process.env.REACT_APP_API_KEY,
        },
      });
      if (response.data.Error) {
        toast(response.data.Error, {
          type: "error",
        });
      } else {
        setSearchMovie(response.data.Search);
      }
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchMovie([]);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchSearchMovie();
    }
  };
  return (
    <SearchCont>
      <SearchInput
        placeholder="Search movie by the title..."
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <SearchBtn onClick={fetchSearchMovie}>
        <BiSearch />
      </SearchBtn>
      <ToastContainer
        className="toast"
        position="top-center"
        pauseOnHover
        autoClose={3000}
      />
    </SearchCont>
  );
};

export default Search;
