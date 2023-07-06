import Layout from "components/common/layout";
import Home from "components/views/home";
import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.scss";
import MovieData from "components/views/movieData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movie" element={<MovieData />} />
      </Route>
    </Routes>
  );
}

export default App;
