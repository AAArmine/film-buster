import Layout from "components/common/layout/layout";
import Home from "components/views/home";
import { Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
