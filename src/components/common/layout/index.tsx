import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import BackgroundImage from "components/common/backgroundImage";
import AppContainer from "./appContainer";
import Footer from "../footer";
import Loading from "components/common/loading";

const Layout = () => {
  return (
    <AppContainer>
      <Suspense fallback={<Loading />}>
        <BackgroundImage />
        <Navigation />
        <Outlet />
        <Footer />
      </Suspense>
    </AppContainer>
  );
};

export default Layout;
