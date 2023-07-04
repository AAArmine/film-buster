import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import BackgroundImage from "./backgroundImage";
import AppContainer from "./appContainer";

const Layout = () => {
  return (
    <AppContainer>
      <BackgroundImage />
      <Navigation />
      <Outlet />
    </AppContainer>
  );
};

export default Layout;
